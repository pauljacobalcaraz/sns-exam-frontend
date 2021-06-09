import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

class EditPost extends React.Component {
	state = {
		title: this.props.post.title,
		content: this.props.post.content,
		show: false,
	};

	btnEditPost = () => {
		let editedPost = {
			_id: this.props.post._id,
			userId: this.props.post.userId,
			username: this.props.post.username,
			email: this.props.post.email,
			title: this.state.title,
			content: this.state.content,
		};
		axios
			.put(
				'https://sns-backend-hiring-exam.herokuapp.com/posts/' +
					this.props.post._id,
				editedPost,
				{
					new: true,
				}
			)
			.then((res) => {
				this.props.editPost(res.data);
			});
		this.setState({
			show: false,
			title: '',
			content: '',
		});
	};

	handleClose = () => this.setState({ show: false });
	handleShow = () => this.setState({ show: true });
	render() {
		return (
			<>
				<Button
					variant='light'
					className='mx-1 p-1'
					size='sm'
					onClick={this.handleShow}
				>
					<span className='material-icons p-0 text-info'>edit</span>
				</Button>
				<Modal
					show={this.state.show}
					onHide={this.handleClose}
					animation={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Add New Post</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group
								className='mb-3'
								controlId='exampleForm.ControlInput1'
							>
								<Form.Label>Title</Form.Label>
								<Form.Control
									type='text'
									placeholder='Title'
									value={this.state.title}
									onChange={(e) => this.setState({ title: e.target.value })}
								/>
							</Form.Group>
							<Form.Group
								className='mb-3'
								controlId='exampleForm.ControlTextarea1'
							>
								<Form.Label>Content</Form.Label>
								<Form.Control
									as='textarea'
									rows={3}
									value={this.state.content}
									onChange={(e) => this.setState({ content: e.target.value })}
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={this.handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={this.btnEditPost}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		accountSignIn: state.acountSignIn,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		editPost: (post) => dispatch({ type: 'EDIT_POST', payload: post }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);

import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

class Posts extends React.Component {
	state = {
		title: '',
		content: '',
		show: false, //modal for adding post
	};

	btnAddPost = () => {
		let newPost = {
			userId: this.props.accountSignIn._id,
			username: this.props.accountSignIn.username,
			email: this.props.accountSignIn.email,
			title: this.state.title,
			content: this.state.content,
		};
		axios
			.post('https://sns-backend-hiring-exam.herokuapp.com/posts', newPost)
			.then((res) => {
				this.props.addPost(res.data);
			});
		this.setState({
			title: '',
			content: '',
			show: false,
		});
	};

	handleClose = () => this.setState({ show: false }); //add modal
	handleShow = () => this.setState({ show: true }); // add modal
	render() {
		return (
			<>
				<Button
					variant='light'
					onClick={this.handleShow}
					className=' border border-1 d-flex '
				>
					<span className='material-icons mb-0'>add</span>
					<span>Post</span>
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
						<Button variant='primary' onClick={this.btnAddPost}>
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
		addPost: (post) => dispatch({ type: 'ADD_POST', payload: post }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

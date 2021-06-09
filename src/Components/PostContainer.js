import React from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import EditPost from './EditPost';
import Likes from './Likes';
import Unlike from './Unlike';
import Comments from './Comments';
import AddComment from './AddComment';

class PostContainer extends React.Component {
	state = {
		show: false, //delete Modal
		showComments: false, //display comments
	};
	handleClose = () => this.setState({ show: false });
	handleShow = () => this.setState({ show: true });

	btnDelete = () => {
		axios
			.delete(
				'https://sns-backend-hiring-exam.herokuapp.com/posts/' +
					this.props.post._id
			)
			.then((res) => {
				this.props.deletePost(res.data);
			});
		axios.delete(
			'https://sns-backend-hiring-exam.herokuapp.com/postId/' +
				this.props.post._id
		);
		// alert(this.props.post._id);
	};

	showComments = () => {
		this.setState({ showComments: true });
	};

	render() {
		return (
			<>
				<Card className='col-md-12 p-0 mb-1'>
					<Card.Header className='d-md-flex justify-content-between'>
						<b>
							{this.props.post.username} <small>{this.props.post.email}</small>
						</b>
						{this.props.accountSignIn._id === this.props.post.userId ? (
							<small>
								<EditPost key={this.props.post._id} post={this.props.post} />

								{/* Delete */}
								<Button variant='light' size='sm' onClick={this.handleShow}>
									<span className='material-icons text-danger'>delete</span>
								</Button>
								{/* Modal for Delete */}
								<Modal
									show={this.state.show}
									onHide={this.handleClose}
									animation={false}
								>
									<Modal.Header closeButton>
										<Modal.Title>Are you sure to delete?</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Card.Body>
											<Card.Title>{this.props.post.title}</Card.Title>
											<Card.Text>{this.props.post.content}</Card.Text>
										</Card.Body>
									</Modal.Body>
									<Modal.Footer>
										<Button variant='secondary' onClick={this.handleClose}>
											Close
										</Button>
										<Button variant='danger' onClick={this.btnDelete}>
											Delete Post
										</Button>
									</Modal.Footer>
								</Modal>
							</small>
						) : (
							''
						)}
					</Card.Header>
					<Card.Body>
						<div className='d-flex'>
							<Card.Title>Title: {this.props.post.title}</Card.Title>
							<small className='p-1'> {this.props.post.createdAt}</small>
						</div>
						<Card.Text className='p-3'>{this.props.post.content}</Card.Text>
						<Card.Text className='d-md-flex bg-light'>
							<div className='col-md-2'>
								{this.props.post.likes.filter(
									(like) => like === this.props.accountSignIn._id
								).length > 0 ? (
									<Unlike key={this.props.post._id} post={this.props.post} />
								) : (
									<Likes key={this.props.post._id} post={this.props.post} />
								)}
								<small className='m-1 py-1'>
									{this.props.post.likes.length} Like/s
								</small>
							</div>
							<di className='d-md-flex justify-content-end col-md-10'>
								<div className='m-1 btn p-0' onClick={this.showComments}>
									<small>
										{
											this.props.comments.filter(
												(comment) => comment.postId._id === this.props.post._id
											).length
										}{' '}
										Comments
									</small>
								</div>
							</di>
						</Card.Text>

						<AddComment postId={this.props.post._id} />

						{this.state.showComments === true ? (
							<Comments key={this.props.postId} postId={this.props.post._id} />
						) : (
							''
						)}
					</Card.Body>
				</Card>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		accountSignIn: state.acountSignIn,
		comments: state.comments,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (post) => dispatch({ type: 'DELETE_POST', payload: post }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

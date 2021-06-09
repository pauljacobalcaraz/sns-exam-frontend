import React from 'react';
import { connect } from 'react-redux';
import {
	Card,
	Form,
	Dropdown,
	DropdownButton,
	Container,
} from 'react-bootstrap';
import axios from 'axios';
import EditComment from './EditComment';
import Likes from './Likes';
import Unlike from './Unlike';
import LikeComment from './LikeComment';
import UnlikeComment from './UnlikeComment';

class CommentContainer extends React.Component {
	state = {
		// comments: this.props.comments,
		commentsFiltered: '',
		showUpdateForm: false,
		comment: '',
	};
	btnDeleteComment = () => {
		axios
			.delete(
				'https://sns-backend-hiring-exam.herokuapp.com/comments/' +
					this.props.comment._id
			)
			.then((res) => {
				// console.log(res.data._id);
				this.props.deleteComment(res.data);
			});
	};
	btnShowUpdateForm = (showUpdateForm) => {
		if (this.state.showUpdateForm === true) {
			this.setState({
				showUpdateForm: false,
			});
		} else {
			this.setState({
				showUpdateForm: true,
			});
		}
	};

	render() {
		console.log(this.props.accountSignIn._id);
		console.log(this.props.comment);

		return (
			<>
				<Card className='mt-2'>
					<Card.Body className='p-0'>
						<Card.Body className='p-0'>
							{this.state.showUpdateForm === false ? (
								<>
									<Card.Title className='mb-0 bg-light p-2 d-flex justify-content-between'>
										<div>
											{this.props.comment.userId.username}
											<small> {this.props.comment.userId.email}</small>
										</div>
										{this.props.accountSignIn._id ==
										this.props.comment.userId._id ? (
											<DropdownButton
												id='dropdown-basic-button'
												variant='light'
												title=''
											>
												<Dropdown.Item
													className='btn btn-danger'
													onClick={this.btnDeleteComment}
												>
													Delete
												</Dropdown.Item>

												<Dropdown.Item
													className='btn btn-warning'
													onClick={this.btnShowUpdateForm}
												>
													Edit
												</Dropdown.Item>
											</DropdownButton>
										) : (
											''
										)}
									</Card.Title>
									<Card.Text className='p-3'>
										{this.props.comment.comment}
									</Card.Text>
									<Container className='p-3 bg-light'>
										{this.props.comment.likes.filter(
											(like) => like === this.props.accountSignIn._id
										).length > 0 ? (
											<UnlikeComment comment={this.props.comment} />
										) : (
											<LikeComment comment={this.props.comment} />
										)}
									</Container>
								</>
							) : (
								<>
									<button
										className='btn float-right'
										onClick={this.btnShowUpdateForm}
									>
										<span class='material-icons text-dark'>cancel</span>
									</button>
									<EditComment
										comment={this.props.comment}
										btnShowUpdateForm={this.btnShowUpdateForm}
									/>
								</>
							)}
						</Card.Body>
					</Card.Body>
				</Card>
			</>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteComment: (comment) =>
			dispatch({ type: 'DELETE_COMMENT', payload: comment }),
	};
};

const mapStateToProps = (state) => {
	return {
		accountSignIn: state.acountSignIn,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);

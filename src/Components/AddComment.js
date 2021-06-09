import React from 'react';
import { connect } from 'react-redux';
import { Card, Form } from 'react-bootstrap';
import axios from 'axios';
import Comments from './Comments';

class AddComment extends React.Component {
	state = {
		userId: this.props.accountSignIn._id,
		postId: this.props.postId,
		comment: '',
	};

	btnAddComment = () => {
		//save comment to db
		axios
			.post(
				'https://sns-backend-hiring-exam.herokuapp.com/comments',
				this.state
			)
			.then((res) => {
				this.props.addComment(res.data);
			});
		this.setState({
			comment: '',
		});
	};

	render() {
		return (
			<>
				<Card>
					<Card.Body>
						<Form.Group
							className='mb-3'
							controlId='exampleForm.ControlTextarea1'
						>
							<Form.Label>Comments</Form.Label>
							<Form.Control
								as='textarea'
								rows={2}
								value={this.state.comment}
								onChange={(e) => this.setState({ comment: e.target.value })}
							/>
						</Form.Group>
						<span
							className='float-right btn btn-primary'
							onClick={this.btnAddComment}
						>
							Add comment
						</span>
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
		addComment: (comment) =>
			dispatch({ type: 'ADD_COMMENT', payload: comment }), //saved to reducer
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);

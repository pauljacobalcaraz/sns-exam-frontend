import React from 'react';
import { connect } from 'react-redux';
import { Card, Form } from 'react-bootstrap';
import axios from 'axios';
import CommentContainer from './CommentContainer';

class Comments extends React.Component {
	state = {
		// comments: this.props.comments,
		commentsFiltered: '',
		showUpdateForm: false,
	};

	btnDeleteComment = () => {
		axios
			.delete(
				'https://sns-backend-hiring-exam.herokuapp.com/comments/' +
					this.props.comment._id
			)
			.then((res) => {
				console.log(res.data);
				// this.props.deletePost(res.data._id);
			});
	};
	btnShowUpdateForm = () => {
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
		return (
			<>
				{this.props.comments
					.filter((comment) => comment.postId._id === this.props.postId)
					.map((comment) => {
						return <CommentContainer key={comment._id} comment={comment} />;
					})}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		comments: state.comments,
	};
};

export default connect(mapStateToProps)(Comments);

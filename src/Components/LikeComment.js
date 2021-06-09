import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class LikeComment extends React.Component {
	// btnLike = () => {
	// 	alert(this.props.postId);
	// };
	state = {
		comment: this.props.comment,
	};
	btnLikeComment = () => {
		let likes = { likes: [...this.state.comment.likes] };
		likes.likes.push(this.props.accountSignIn._id);
		axios
			.put(
				'https://sns-backend-hiring-exam.herokuapp.com/comments/' +
					this.props.comment._id,
				likes
			)
			.then((res) => {
				this.props.likeComment(res.data);
			});
	};

	render() {
		return (
			<>
				<div className='d-flex'>
					<span
						className='material-icons btn p-0'
						onClick={this.btnLikeComment}
					>
						thumb_up
					</span>
					<small className=' m-1'>
						{this.props.comment.likes.length}
						Like/s
					</small>
				</div>
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
		likeComment: (comment) =>
			dispatch({ type: 'LIKE_COMMENT', payload: comment }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeComment);

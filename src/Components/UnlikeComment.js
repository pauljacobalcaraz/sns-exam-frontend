import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Unlike extends React.Component {
	// btnLike = () => {
	// 	alert(this.props.postId);
	// };
	state = {
		comment: this.props.comment,
	};

	btnUnLike = () => {
		let likes = { likes: [...this.state.comment.likes] };
		let filteredLikes = likes.likes.filter(
			(like) => like !== this.props.accountSignIn._id
		);

		axios
			.put(
				'https://sns-backend-hiring-exam.herokuapp.com/comments/' +
					this.props.comment._id,
				{
					likes: filteredLikes,
				}
			)
			.then((res) => {
				this.props.unLikeComment(res.data);
			});
	};
	render() {
		// console.log(this.props.comment._id);
		return (
			<>
				<div className='d-flex'>
					<span className='material-icons btn p-0' onClick={this.btnUnLike}>
						thumb_down
					</span>
					<small className='m-1 '>
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
		// likePost: (post) => dispatch({ type: 'LIKE_POST', payload: post }),
		unLikeComment: (comment) =>
			dispatch({ type: 'UNLIKE_COMMENT', payload: comment }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Unlike);

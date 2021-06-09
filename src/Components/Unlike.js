import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Likes extends React.Component {
	// btnLike = () => {
	// 	alert(this.props.postId);
	// };
	state = {
		post: this.props.post,
	};

	btnUnLike = () => {
		let likes = { likes: [...this.state.post.likes] };
		let filteredLikes = likes.likes.filter(
			(like) => like !== this.props.accountSignIn._id
		);
		axios
			.put(
				'https://sns-backend-hiring-exam.herokuapp.com/posts/' +
					this.props.post._id,
				{
					likes: filteredLikes,
				}
			)
			.then((res) => {
				this.props.unLikePost(res.data);
			});
	};
	render() {
		return (
			<>
				<span className='material-icons btn p-1' onClick={this.btnUnLike}>
					thumb_down
				</span>
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
		unLikePost: (post) => dispatch({ type: 'UNLIKE_POST', payload: post }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);

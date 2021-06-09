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
	btnLike = () => {
		let likes = { likes: [...this.state.post.likes] };
		likes.likes.push(this.props.accountSignIn._id);
		axios
			.put(
				'https://sns-backend-hiring-exam.herokuapp.com/' + this.props.post._id,
				likes
			)
			.then((res) => {
				this.props.likePost(res.data);
			});
	};

	render() {
		return (
			<>
				<span className='material-icons btn p-1' onClick={this.btnLike}>
					thumb_up
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
		likePost: (post) => dispatch({ type: 'LIKE_POST', payload: post }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);

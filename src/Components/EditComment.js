import React from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class EditComment extends React.Component {
	state = {
		updateCommentValue: this.props.comment.comment,
	};
	btnUpdatePost = () => {
		console.log(this.state);
		axios
			.put(
				'https://sns-backend-hiring-exam.herokuapp.com/comments/' +
					this.props.comment._id,
				{
					...this.props.comment,
					comment: this.state.updateCommentValue,
				},
				{
					new: true,
				}
			)
			.then((res) => {
				this.props.editComment(res.data);
				// console.log(res.data);
				this.props.btnShowUpdateForm(res.data);
			});
		// alert();
	};

	render() {
		return (
			<div className='p-1'>
				<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
					<Form.Label className='p-1'>Edit Comment</Form.Label>
					<Form.Control
						as='textarea'
						rows={2}
						value={this.state.updateCommentValue}
						onChange={(e) =>
							this.setState({ updateCommentValue: e.target.value })
						}
					/>
					<button className='btn btn-light mt-2' onClick={this.btnUpdatePost}>
						Update Comment
					</button>
				</Form.Group>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		editComment: (comment) =>
			dispatch({ type: 'EDIT_COMMENT', payload: comment }),
	};
};

export default connect(null, mapDispatchToProps)(EditComment);

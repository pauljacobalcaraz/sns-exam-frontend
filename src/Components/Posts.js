import React from 'react';
import { connect } from 'react-redux';
import PostContainer from './PostContainer';
import NavbarMenu from './NavbarMenu';
import AddPost from './AddPost';

class Posts extends React.Component {
	render() {
		return (
			<div>
				<NavbarMenu />
				<div className='col-md-12 p-3'>
					<div className='col-md-8 mx-auto p-4'>
						{this.props.posts.map((post) => {
							return <PostContainer key={post._id} post={post} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	};
};

export default connect(mapStateToProps)(Posts);

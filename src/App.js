import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Link, Route, Redirect } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';

import { connect } from 'react-redux';
import Posts from './Components/Posts';
import PopAlert from './Components/PopAlert';
import AddPost from './Components/AddPost';

class App extends React.Component {
	componentDidMount() {
		//get comments and post and set to reducer
		axios
			.get('https://sns-backend-hiring-exam.herokuapp.com/posts')
			.then((res) => {
				this.props.setPosts(res.data);
			});
		axios
			.get('https://sns-backend-hiring-exam.herokuapp.com/comments')
			.then((res) => {
				this.props.setComments(res.data);
			});
	}
	render() {
		return (
			<>
				<Route exact path='/register'>
					{this.props.accountSignIn && <Redirect to='/posts' />}
					{/* not accessible when account already login */}
					<RegistrationForm />
				</Route>
				<Route exact path='/'>
					{this.props.accountSignIn && <Redirect to='/posts' />}
					{/* not accessible when account already login */}
					<LoginForm />
				</Route>
				<Route exact path='/posts'>
					{!this.props.accountSignIn && <Redirect to='/login' />}
					{/* not accessible when no account  login */}
					<Posts />

					{this.props.popAlert ? (
						<div className=' col-md-3  fixed-bottom p-4'>
							<PopAlert />
						</div>
					) : (
						''
					)}
				</Route>
			</>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setPosts: (posts) => dispatch({ type: 'SET_POSTS', payload: posts }),
		setComments: (posts) => dispatch({ type: 'SET_COMMENTS', payload: posts }),
	};
};

const mapStateToProps = (state) => {
	return {
		accountSignIn: state.acountSignIn, //get the account Signed in
		popAlert: state.popAlert, // get the activity
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

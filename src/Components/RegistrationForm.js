import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
	Form,
	Container,
	Col,
	Row,
	Button,
	Badge,
	Alert,
	variant,
} from 'react-bootstrap';
import { connect, ReactReduxContext } from 'react-redux';

class RegistrationForm extends React.Component {
	state = {
		email: '',
		username: '',
		password: '',

		//validation or format
		confirmPassword: '',
		passErrorMessage: '',
		emailFormatErrrorMessage: '',

		//existed email, username
		existedMessages: '',
	};

	register = () => {
		// console.log(this.state);
		if (!this.state.email.includes('@')) {
			this.setState({ emailFormatErrrorMessage: 'Invalid email' });
			return;
		}
		if (this.state.password !== this.state.confirmPassword) {
			this.setState({ passErrorMessage: 'Password did not match' });
			return;
		}

		let account = {
			email: this.state.email,
			username: this.state.username,
			password: this.state.password,
		};

		axios
			.post('https://sns-backend-hiring-exam.herokuapp.com/register', account)
			.then((res) => {
				if (res.data.usernameError) {
					this.setState({ existedMessages: res.data.usernameError });
				} else {
					alert(`Welcome ${res.data.email}!`);
					this.props.login(res.data);
				}
			});
	};

	render() {
		return (
			<Container className='bg-light my-5 col-md-5 p-md-5'>
				<Form className='col-md-12 mx-auto'>
					<h3>Sign Up</h3>
					<br />
					<Form.Group
						as={Row}
						controlId='formHorizontalEmail'
						className='d-md-flex justify-content-end'
					>
						{/* existed email */}
						{this.state.existedMessages === '' ? (
							''
						) : (
							<Alert variant='danger' className='col-12 p-3'>
								{this.state.existedMessages}
							</Alert>
						)}
						<Form.Label column sm={2}>
							Email
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								type='email'
								placeholder='Email'
								value={this.state.email}
								onChange={(e) =>
									this.setState({
										email: e.target.value.trim(),
										emailFormatErrrorMessage: '',
										existedMessages: '',
									})
								}
							/>
						</Col>
						{/* invalid email */}
						{this.state.emailFormatErrrorMessage === '' ? (
							''
						) : (
							<Col className='col-md-4 text-center'>
								<Alert variant='danger' className='m-0 mt-3 p-0'>
									<small>{this.state.emailFormatErrrorMessage}</small>
								</Alert>
							</Col>
						)}
					</Form.Group>

					<Form.Group as={Row} controlId='formHorizontalUsername'>
						<Form.Label column sm={2}>
							Username
						</Form.Label>

						<Col sm={10}>
							<Form.Control
								type='text'
								placeholder='Username'
								value={this.state.username}
								onChange={(e) =>
									this.setState({
										username: e.target.value.trim(),
										existedMessages: '',
									})
								}
							/>
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						controlId='formHorizontalPassword'
						className='d-md-flex justify-content-end'
					>
						<Form.Label column sm={2}>
							Password
						</Form.Label>

						<Col sm={10}>
							<Form.Control
								type='password'
								placeholder='Password'
								value={this.state.password}
								onChange={(e) =>
									this.setState({
										password: e.target.value,
										passErrorMessage: '',
									})
								}
							/>
						</Col>
						{this.state.passErrorMessage === '' ? (
							''
						) : (
							<Col className='col-md-4 text-center'>
								<Alert variant='danger' className='m-0 mt-3 p-0'>
									<small>{this.state.passErrorMessage}</small>
								</Alert>
							</Col>
						)}
					</Form.Group>

					<Form.Group as={Row} controlId='formHorizontalConfirmPassword'>
						<Form.Label column sm={2}>
							Confirm Password
						</Form.Label>

						<Col sm={10}>
							<Form.Control
								type='password'
								placeholder='Password'
								value={this.state.confirmPassword}
								onChange={(e) =>
									this.setState({ confirmPassword: e.target.value })
								}
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Col sm={{ span: 10, offset: 2 }}>
							<Button onClick={this.register} className='mr-2'>
								Register
							</Button>
							<Link to='/'>Login</Link>
						</Col>
					</Form.Group>
				</Form>
			</Container>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		login: (user) => dispatch({ type: 'LOGIN', payload: user }),
	};
};

export default connect(null, mapDispatchToProps)(RegistrationForm);

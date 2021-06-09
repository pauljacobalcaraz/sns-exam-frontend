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
} from 'react-bootstrap';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
	state = {
		username: '',
		password: '',

		errorMessage: '',
	};

	login = () => {
		let account = {
			username: this.state.username,
			password: this.state.password,
		};

		axios
			.post('https://sns-backend-hiring-exam.herokuapp.com/login', account)
			.then((res) => {
				if (res.data.error) {
					this.setState({ errorMessage: res.data.error });
					// alert(res.data.error);
				} else {
					alert('success');
					// console.log(res.data.email);
					// localStorage.setItem('account', res.data);
					// localStorage.setItem('account', JSON.stringify(res.data));
					this.props.login(res.data);
				}
				// console.log(localStorage.getItem('account', { username }));
			});
	};

	render() {
		return (
			<Container className='bg-light my-5 col-md-5 p-md-5'>
				<Form className='col-md-12 mx-auto'>
					<h3>Log In</h3>
					<br />
					{this.state.errorMessage === '' ? (
						''
					) : (
						<Alert
							variant='danger'
							onClose={() => this.setState({ errorMessage: '', password: '' })}
							dismissible
						>
							{this.state.errorMessage}
						</Alert>
					)}
					<Form.Group as={Row} controlId='formHorizontalUsername'>
						<Form.Label column sm={2}>
							Username
						</Form.Label>

						<Col sm={10}>
							<Form.Control
								type='text'
								placeholder='Username'
								value={this.state.username}
								onChange={(e) => this.setState({ username: e.target.value })}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId='formHorizontalPassword'>
						<Form.Label column sm={2}>
							Password
						</Form.Label>

						<Col sm={10}>
							<Form.Control
								type='password'
								placeholder='Password'
								value={this.state.password}
								onChange={(e) => this.setState({ password: e.target.value })}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Col sm={{ span: 10, offset: 2 }}>
							<Button onClick={this.login} className='mr-2'>
								Login
							</Button>
							<Link to='/register'>Register</Link>
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

export default connect(null, mapDispatchToProps)(LoginForm);

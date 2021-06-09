import React from 'react';
import { Navbar, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import AddPost from './AddPost';
import { connect } from 'react-redux';

class NavbarMenu extends React.Component {
	state = {
		accountSignIn: this.props.accountSignIn
			? this.props.accountSignIn.username
			: null,
	};
	btnLogout = () => {
		this.props.logout(null);
	};
	render() {
		return (
			<>
				<Navbar className='bg-light'>
					<Container>
						<Navbar.Brand href='#home'>SNS</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className='justify-content-end'>
							<Navbar.Text>
								<AddPost />
							</Navbar.Text>
						</Navbar.Collapse>
						<Navbar.Collapse className='justify-content-end'>
							<Navbar.Text>
								<DropdownButton
									id='dropdown-basic-button'
									title={'Signed in as: ' + this.state.accountSignIn}
									variant='light'
								>
									<Dropdown.Item>
										<>{this.state.accountSignIn}</>
									</Dropdown.Item>
									<Dropdown.Item onClick={this.btnLogout}>Logout</Dropdown.Item>
								</DropdownButton>
							</Navbar.Text>
						</Navbar.Collapse>
					</Container>
				</Navbar>
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
		logout: (user) => dispatch({ type: 'LOGIN', payload: user }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMenu);

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Toast, Button } from 'react-bootstrap';

class PopAlert extends React.Component {
	state = {
		setShow: false,
	};
	btnClearPop = () => {
		this.props.clearPop(null);
	};
	render() {
		return (
			<>
				<div
					aria-live='polite'
					aria-atomic='true'
					style={{
						position: 'relative',
						minHeight: '200px',
					}}
				>
					<div
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
						}}
						className='col-12'
					>
						<Row>
							<Col xs={12}>
								<Toast onClick={this.btnClearPop}>
									<Toast.Header>
										<strong className='mr-auto'>
											{this.props.popAlert.activity}
										</strong>
										<small>Just now</small>
									</Toast.Header>
									<Toast.Body>{this.props.popAlert.content}</Toast.Body>
								</Toast>
							</Col>
						</Row>
					</div>
				</div>
			</>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		clearPop: (pop) => dispatch({ type: 'ClEAR_POP', payload: pop }),
	};
};

const mapStateToProps = (state) => {
	return {
		popAlert: state.popAlert,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PopAlert);

import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { setUserInfo } from '@/redux/actions/userInfo';
import '@/assets/css/login';
import HorizontalLoginForm from "./components/signupform"

const FormItem = Form.Item;
class SignUp extends Component {
	state = { clientHeight: document.documentElement.clientHeight || document.body.clientHeight };
	constructor(props) {
		super(props);
		this.onResize = this.onResize.bind(this);
	}
	login = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				localStorage.setItem('isLogin', '1');
				// 模拟生成一些数据
				this.props.setUserInfo(Object.assign({}, values, { role: { type: 1, name: '超级管理员' } }));
				localStorage.setItem('userInfo', JSON.stringify(Object.assign({}, values, { role: { type: 1, name: '超级管理员' } })));
				this.props.history.push('/dashboard');
			} else {
				console.log(err);
			}
		});
	};
	componentDidMount() {
		window.addEventListener('resize', this.onResize);
	}
	componentWillUnmount() {
		window.addEventListener('resize', this.onResize);
		// componentWillMount进行异步操作时且在callback中进行了setState操作时，需要在组件卸载时清除state
		this.setState = () => {
			return;
		};
	}

	signup(){
		this.props.history.push('/signup');
	}
	onResize() {
		this.setState({ clientHeight: document.documentElement.clientHeight || document.body.clientHeight });
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="container">
				<Particles
					height={this.state.clientHeight - 5 + 'px'}
					params={{
						number: { value: 50 },
						ize: { value: 3 },
						interactivity: {
							events: {
								onhover: { enable: true, mode: 'repulse' }
							}
						}
					}}
				/>
				<div className="content_signup">
					<HorizontalLoginForm></HorizontalLoginForm>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
	setUserInfo: data => {
		dispatch(setUserInfo(data));
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form.create()(SignUp));

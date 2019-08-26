import React from "react"

import { Form, Icon, Input, Button } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <div className="form-inline">
            <Form.Item label="First Name" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item label="Last Name" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
              {getFieldDecorator('lastName', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Last Name"
                />,
              )}
            </Form.Item>
          </div>
          <Form.Item label="Company" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
            {getFieldDecorator('company', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item label="Password">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Confirm Password">
            {getFieldDecorator('password_1', {
              rules: [
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
              Sign Up
          </Button>
          </Form.Item>
        </Form>
      </div>

    );
  }
}

const WrappedSignupForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default WrappedSignupForm;
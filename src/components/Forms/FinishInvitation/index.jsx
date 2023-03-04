import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

class FinishInvitation extends Component {

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (!value) callback('Please confirm your password');
    else if (value !== form.getFieldValue('password'))
      callback('Two passwords that you enter is inconsistent!');
    else callback();
  };
  

  render() {
    const { form, initialState, onSubmit } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={onSubmit}>
        <Form.Item style={{ display: 'none' }}>
          {getFieldDecorator('token', {
            initialValue: initialState.token,
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Email">
          {getFieldDecorator('invitationEmail', {
            initialValue: initialState.invitationEmail,
            rules: [
              {
                type: 'email',
                message: 'The input is not a valid E-mail!'
              },
            ],
          })(<Input disabled size="large" placeholder="Your Email" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Enter your first name">
          {getFieldDecorator('firstName', {
            initialValue: initialState.firstName,
            rules: [
              {
                required: true,
                message: 'Please input your first name',
              },
              {
                max: 255,
                message: 'The input is too long.',
              },
            ],
          })(<Input size="large" placeholder="First name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Enter your last name">
          {getFieldDecorator('lastName', {
            initialValue: initialState.lastName,
            rules: [
              {
                required: true,
                message: 'Please input your last name',
              },
              {
                max: 255,
                message: 'The input is too long.',
              },
            ],
          })(<Input size="large" placeholder="Last name" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Enter new password and confirm it :">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password',
              },
              {
                max: 255,
                message: 'The input is too long.',
              },
            ],
          })(<Input size="large" type="password" placeholder="Password" />)}
        </Form.Item>
        <Form.Item {...formItemLayout}>
          {getFieldDecorator('confirmPassword', {
            rules: [
              {
                required: true,
                validator: this.compareToFirstPassword, 
              },
            ],
          })(<Input size="large" type="password" placeholder="Confirm Password" />)}
        </Form.Item>
        <Form.Item {...formItemLayout}>
          <Button type="primary" htmlType="submit" block size="large">
            Finish Invitation
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

FinishInvitation.propTypes = {
  initialState: PropTypes.object,
  onSubmit: PropTypes.func,
  form: PropTypes.object.isRequired,
};

FinishInvitation.defaultProps = {
  initialState: {
    email: '',
    firstName: '',
    lastName: '',
  },
  onSubmit: () => { },
};

export default Form.create({ name: 'finishInvitation' })(FinishInvitation);
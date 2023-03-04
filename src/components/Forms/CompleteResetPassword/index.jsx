import React, { Component } from 'react';
import Input from 'components/theme/uielements/input';
import Form from 'components/theme/uielements/form';
import { Button } from 'antd';
import PropTypes from 'prop-types';

class CompleteResetPassword extends Component {
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('newPassword')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  render() {
    const { onSubmit, form, initialState } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Form onSubmit={onSubmit}>
        <Form.Item style={{ display: 'none' }}>
          {getFieldDecorator('token', {
            initialValue: initialState.token,
          })(<Input />)}
        </Form.Item>
        <Form.Item style={{ display: 'none' }}>
          {getFieldDecorator('email', {
            initialValue: initialState.email,
          })(<Input />)}
        </Form.Item>
        <Form.Item label="New password">
          {getFieldDecorator('newPassword', {
            rules: [
              {
                required: true,
                message: 'Please input your new password!',
              },
              {
                max: 255,
                message: 'The input is too long.',
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm password">
          {getFieldDecorator('confirmPassword', {
            rules: [
              {
                required: true,
                message: 'Please confirm your new password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Reset password
        </Button>
      </Form>
    );
  }
}

CompleteResetPassword.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  initialState: PropTypes.object,
};

CompleteResetPassword.defaultProps = {
  onSubmit: () => { },
  initialState: {
    token: '',
    email: ''
  },
}

export default Form.create({ name: 'completeResetPassword' })(CompleteResetPassword);
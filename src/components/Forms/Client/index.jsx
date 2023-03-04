import React, { Component } from 'react';
import Input from 'components/theme/uielements/input';
import Form from 'components/theme/uielements/form';
import PropTypes from 'prop-types';
import isURL from "validator/lib/isURL";

class Client extends Component {
  render() {
    const { form, initialState } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            initialValue: initialState.email,
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            initialValue: initialState.name,
            rules: [
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true
              },
              {
                max: 70,
                message: 'The input is too long.',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Link to company">
          {getFieldDecorator('linkToCompany', {
            initialValue: initialState.linkToCompany,
            rules: [
              {
                validator: (rule, value) => {
                 if (isURL(value, { require_protocol: true}) || value === '') {
                  return Promise.resolve();
                 }
                 return Promise.reject(new Error('URL is not correct'));
                }
              },
            ],
          })(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}

Client.propTypes = {
  form: PropTypes.object.isRequired,
  initialState: PropTypes.object,
};

Client.defaultProps = {
  initialState: {
    name: '',
    email: '',
    linkToCompany: '',
  },
};

export default Form.create({ name: 'client' })(Client);

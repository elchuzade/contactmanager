import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };
  // names of fields in the state object must match names of input fields in input html tags
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    // Validation
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div>
                <div className="card-header">Add Contact</div>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    placeholder="Enter Name..."
                    value={name}
                    label="Name"
                    name="name"
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    type="email"
                    placeholder="Enter Email..."
                    value={email}
                    label="Email"
                    name="email"
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    placeholder="Enter Phone..."
                    value={phone}
                    label="Phone"
                    name="phone"
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;

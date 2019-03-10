import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          {showContactInfo ? (
            <i
              onClick={this.onShowClick}
              className="fas fa-sort-up"
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <i
              onClick={this.onShowClick}
              className="fas fa-sort-down"
              style={{ cursor: 'pointer' }}
            />
          )}
          <i
            className="fas fa-times float-right text-danger"
            style={{ cursor: 'pointer' }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;

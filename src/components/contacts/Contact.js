import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import classnames from 'classnames';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={this.onShowClick}
                  className={classnames('fas', {
                    'fa-sort-up': showContactInfo,
                    'fa-sort-down': !showContactInfo
                  })}
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times float-right text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;

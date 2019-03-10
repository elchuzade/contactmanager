import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import classnames from 'classnames';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

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
                  className="fas fa-trash float-right text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`/contact/edit/${id}`}><i className="fas fa-pencil-alt text-dark float-right mr-3" style={{cursor: 'pointer'}}></i></Link>
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

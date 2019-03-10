import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'doe@gmail.com',
        phone: '555-555-4444'
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'smith@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 3,
        name: 'Jeff Williams',
        email: 'wil@gmail.com',
        phone: '555-555-6666'
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;

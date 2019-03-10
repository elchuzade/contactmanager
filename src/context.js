import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

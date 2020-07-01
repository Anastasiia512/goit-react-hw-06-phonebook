import React, { Component } from 'react';

import ContactForm from '../ContactForm/index';
import Filter from '../Filter/index';
import ContactList from '../ContactList/index';
import css from './appStyles.module.css';
import { CSSTransition } from 'react-transition-group';
import appTransitions from '../../transitions/appTransition.module.css';


export default class App extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    if (!this.state.contacts.length) {
      const contacts = JSON.parse(localStorage.getItem('contacts'));
      if (contacts) {
        getContacts(contacts);
      }
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        
        <CSSTransition
          in={isOpen}
          classNames={appTransitions}
          timeout={300}
          unmountOnExit
        >
          <h1 className={css.title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <Filter />
        <ContactList />)
      </>
    );
  }
}

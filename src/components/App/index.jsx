import React, { Component } from 'react';

import ContactForm from '../../redux/containers/contactFormContainer';
import Filter from '../../redux/containers/filterContainer';
import ContactList from '../../redux/containers/contactListContainer';

import css from './appStyles.module.css';
import { CSSTransition } from 'react-transition-group';
import appTransitions from '../../transitions/appTransition.module.css';

export default class App extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    this.setState({ isOpen: true });
    const LScontacts = JSON.parse(localStorage.getItem('contacts'));
    if (LScontacts) {
      this.props.getContacts(LScontacts);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.contacts !== this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
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
        <ContactList />
      </>
    );
  }
}

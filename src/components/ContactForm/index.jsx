import React, { Component } from 'react';
import './contactFormStyles.scss';
import ContactNotice from '../ContactNotice/ContactNotice';
import contactNoticeTransition from '../../transitions/contactNoticeTransition.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  filterContact = contacts => {
    return contacts.find(contact => contact.number === this.state.number);
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form
          className="contactForm"
          onSubmit={e => {
            e.preventDefault();
            if (!this.filterContact(contacts)) {
              contactToAdd(name, number);
              this.setState({ name: '', number: '' });
              return;
            }
            toggleWarning(true);
            setTimeout(() => {
              toggleWarning(false);
            }, 2000);
          }}
        >
          <CSSTransition
            in={isWarning}
            classNames={contactNoticeTransition}
            timeout={300}
            unmountOnExit
          >
            <ContactNotice />
          </CSSTransition>
          <div className="contactInputHolder">
            <label>Name</label>
            <input
              className="contactFormInput"
              type="text"
              required
              name="name"
              id="name"
              value={this.setState(name)}
            />
          </div>
          <div className="contactInputHolder">
            <label>Number</label>
            <input
              className="contactFormInput"
              type="number"
              name="number"
              required
              value={this.setState(number)}
            />
          </div>
          <div className="contactFormButtonHolder">
            <button className="contactFormButton" type="submit">
              Add contact
            </button>
          </div>
        </form>
      </>
    );
  }
}

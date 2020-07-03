import React from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './contactFormStyles.scss';
import ContactNotice from '../ContactNotice/ContactNotice';
import contactNoticeTransition from '../../transitions/contactNoticeTransition.module.css';

const ContactForm = ({ contacts, addContact, toggleWarning, isWarning }) => {
  let nameInput;
  let numberInput;

  const filterContact = contacts => {
    return contacts.find(contact => contact.number === numberInput.value);
  };

  const handleClearValue = () => {
    nameInput.value = '';
    numberInput.value = '';
  };

  return (
    <>
      <form
        className="contactForm"
        onSubmit={e => {
          e.preventDefault();
          if (!filterContact(contacts)) {
            addContact(nameInput.value, numberInput.value);
            handleClearValue();
            return;
          }
          toggleWarning(true);
          setTimeout(() => {
            toggleWarning(false);
          }, 2000);
          handleClearValue();
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
            ref={node => (nameInput = node)}
            className="contactFormInput"
            type="text"
            required
            name="name"
            id="name"
          />
        </div>
        <div className="contactInputHolder">
          <label>Number</label>
          <input
            className="contactFormInput"
            type="number"
            name="number"
            required
            ref={node => (numberInput = node)}
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
};

ContactForm.propTypes = {
  contacts: propTypes.array.isRequired,
  addContact: propTypes.func.isRequired,
  toggleWarning: propTypes.func.isRequired,
  isWarning: propTypes.bool.isRequired,
};

export default ContactForm;

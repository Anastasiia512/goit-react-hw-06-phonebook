import React from 'react';
import propTypes from 'prop-types';
import './contactListStyles.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import appTransitions from '../../transitions/appTransition.module.css';

const ContactList = ({ handleDeleteContact, contacts, filter }) => {
  const filteredContacts = (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  };

  return (
    <TransitionGroup component="ul" className="contactList">
      {filteredContacts(filter, contacts).map(contact => (
        <CSSTransition
          key={contact.id}
          classNames={appTransitions}
          timeout={300}
          unmountOnExit
        >
          <li className="contactListItem">
            <p className="contactListField">{contact.name}</p>
            <p className="contactListField">{contact.number}</p>
            <button
              onClick={() => handleDeleteContact(contact.id)}
              type="button"
              className="material-icons"
            >
              clear
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  handleDeleteContact: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;

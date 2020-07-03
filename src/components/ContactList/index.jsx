import React from 'react';
import propTypes from 'prop-types';
import './contactListStyles.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import appTransitions from '../../transitions/appTransition.module.css';

const ContactList = ({ contacts, filter, handleDeleteContact}) => {
  const filteredContacts = (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  };

  return (
    <TransitionGroup component="ul" className="contactList">
      {filteredContacts( contacts, filter).map(({name, number, id})=> (
        <CSSTransition
          key={id}
          classNames={appTransitions}
          timeout={300}
          unmountOnExit
        >
          <li className="contactListItem">
            <p className="contactListField">{name}</p>
            <p className="contactListField">{number}</p>
            <button
              onClick={() => handleDeleteContact(id)}
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

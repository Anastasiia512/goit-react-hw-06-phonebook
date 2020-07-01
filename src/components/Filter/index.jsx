import React from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import filterTransition from '../../transitions/filterTransition.module.css';
import './filterStyles.scss';

const Filter = ({ contacts, findContactByName }) => (
  <CSSTransition
    in={contacts.length >= 2}
    timeout={250}
    unmountOnExit
    classNames={filterTransition}
  >
    <div className="contactsFilter">
      <div className="contactsFilterBox">
        <label className="contactsFilterLabel">Find contacts by name</label>
        <input
          className="contactsFilterInput"
          ref={node => (inputValue = node)}
          type="text"
          name="name"
          id="text"
          onChange={() => findContactByName(inputValue)}
        />
      </div>
    </div>
  </CSSTransition>
);

Filter.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      number: propTypes.number.isRequired,
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
  findContactByName: propTypes.func.isRequired,
};

export default Filter;

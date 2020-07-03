import React from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import filterTransition from '../../transitions/filterTransition.module.css';
import './filterStyles.scss';

const Filter = ({ contacts, findContactByName }) => {
  let input;

  return (
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
            ref={node => (input = node)}
            type="text"
            name="name"
            id="text"
            onChange={() => findContactByName(input.value)}
          />
        </div>
      </div>
    </CSSTransition>
  );
};

Filter.propTypes = {
  contacts: propTypes.array.isRequired,
  findContactByName: propTypes.func.isRequired,
};

export default Filter;

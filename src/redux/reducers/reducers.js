import { combineReducers } from 'redux';
import { Type } from '../actions/appActions';
import { allContacts } from '../contacts/defaultContacts';

const contacts = (state = allContacts, { type, payload, id, contacts }) => {
  switch (type) {
    case Type.ADD_CONTACT:
      return [
        ...state,
        {
          name: payload.name,
          number: payload.number,
          id: payload.id,
        },
      ];

    case Type.DELETE_CONTACT:
      return state.filter(contact => contact.id !== id);

    case Type.LOCAL_STORAGE_CONTACTS:
      return [...contacts];

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case Type.FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};

const warning = (state = false, { type, payload }) => {
  switch (type) {
    case Type.WARNING:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
  warning,
});

import { combineReducers } from 'redux';
import { Type } from '../actions/appActions';
import { allContacts } from '../contacts/defaultContacts';

const contactsReducer = (state = allContacts, { action, id, contacts }) => {
  switch (action.type) {
    case Type.ADD_CONTACT:
      return [
        ...state,
        {
          name: action.payload.name,
          number: action.payload.number,
          id: action.payload.id,
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

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return action.payload.value;

    default:
      return state;
  }
};

const warningReducer = (state = false, action) => {
  switch (action.type) {
    case WARNING:
      return action.payload.isWarning;
    default:
      return state;
  }
};

export default combineReducers({ contactsReducer, filterReducer, warningReducer });

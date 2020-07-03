import { v4 } from "uuid";

export const Type = {
    ADD_CONTACT: 'ADD_CONTACT',
    DELETE_CONTACT: 'DELETE_CONTACT',
    WARNING: 'WARNING',
    FILTER_CONTACTS: 'FILTER_CONTACTS',
    LOCAL_STORAGE_CONTACTS: 'LOCAL_STORAGE_CONTACTS'
}

export const addContact =(name, number) => ({
    type: Type.ADD_CONTACT,
    payload: {name, number, id: v4()}
})

export const deleteContact = (id) => ({
    type: Type.DELETE_CONTACT,
    payload: id,
})

export const warning = (isWarning) => ({
    type: Type.WARNING,
    payload: isWarning,
})

export const filterContacts = (value) => ({
    type: Type.FILTER_CONTACTS,
    payload: value,
})

export const contactsFromLocalStorage = (contacts) => ({
    type: Type.LOCAL_STORAGE_CONTACTS,
    payload: contacts,
})
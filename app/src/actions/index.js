import ADD_CONTACT from '../model/constants'
import SET_CONTACT from '../model/constants'

let nextId = 2

export const addContact = (contact) => {
  return {
    type: 'ADD_CONTACT',
    id: nextId++,
    firstName: contact.firstName,
    lastName: contact.lastName,
    number: contact.number
  }
}

export const setContact = (id) => {
  return {
    type: 'SET_CONTACT',
    id
  }
}
import ADD_CONTACT from '../model/constants'
import SET_CONTACT from '../model/constants'
import { combineReducers } from 'redux'

const contact = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        contact: action.contact
      }

    default:
      return state
  }
}

//Sample data
var initiateState = {
    selected: 0,
    contacts: [
        {id: 0, firstName: "John", lastName: "Doe", number: "+44718214731" },
        {id: 1, firstName: "Sheldon", lastName: "White", number: "+44874783917" }
    ]
};

const contacts = (state = initiateState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
        return Object.assign({}, state, {
        contacts: [
          ...state.contacts,
          contact(undefined, action)
        ]
      })
    case 'SET_CONTACT':
        return Object.assign({}, state, {
            selected: action.id
        })
    default:
      return state
  }
}

export default contacts
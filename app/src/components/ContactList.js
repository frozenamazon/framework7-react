import React, { Component, PropTypes } from 'react'
import ContactListItem from './ContactListItem'
import {connect} from 'react-redux'
import { setContact } from '../actions'

const ContactList = ({contacts, onContactClick}) => {
    return (
        <div data-page="contactlist" className="page">
        <div className="page-content">
            <div className="list-block contacts-list">
                <ul>
                    {contacts.map(contact =>
                      <ContactListItem
                        key={contact.id}
                        {...contact} 
                        onContactClick={onContactClick}
                      />
                    )}
                </ul>
            </div>
        </div>
        </div>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired).isRequired,
    onContactClick: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    onContactClick: (id) => {
      dispatch(setContact(id))
    }
  }
}

export default connect(
  state => ({contacts: state.contacts}),
    mapDispatchToProps
)(ContactList)


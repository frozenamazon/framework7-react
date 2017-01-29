import React, { Component, PropTypes } from 'react'
import ContactListItem from './ContactListItem'
import {connect} from 'react-redux'

const ContactList = ({contacts}) => {
    return (
        <div data-page="contactlist" className="page">
        <div className="page-content">
            <div className="list-block contacts-list">
                <ul>
                    {contacts.map(contact =>
                      <ContactListItem
                        key={contact.id}
                        {...contact} 
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
  }).isRequired).isRequired
}

export default connect(
  state => ({contacts: state.contacts})
)(ContactList)


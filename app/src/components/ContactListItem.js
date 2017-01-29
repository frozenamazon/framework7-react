import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setContact } from '../actions'

function test(){console.log('test')}

const ContactListItem = ({ firstName, lastName, number, id, onContactClick }) => {
    return (
    <li>
      <a onClick={() => onContactClick(id)} href="#contact" className=" item-content item-link" >
        <div className="item-media"><i className="ion ion-ios-person"></i></div>
        <div className="item-inner"><div className="item-title">{firstName} {lastName}</div></div>
      </a>
    </li>
)}

ContactListItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
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
)(ContactListItem)

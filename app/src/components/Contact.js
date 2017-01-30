import React, { Component } from 'react'
import {$} from 'framework7'
import {connect} from 'react-redux'

const ContactDetails = ({contact}) => {
    return (
        <div data-page="contact" className="page cached">
        <div className="page-content">
            <div className="list-block media-list">
                <ul>
                    <li>
                      <div className=" item-content">
                        <div className="item-inner">
                            <div className="item-title-row">
                            <div className="item-title titlelabel">First name</div>
                          </div>
                            <div className="item-subtitle">{contact.firstName}</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className=" item-content">
                        <div className="item-inner">
                            <div className="item-title-row">
                            <div className="item-title titlelabel">Last name</div>
                          </div>
                            <div className="item-subtitle">{contact.lastName}</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className=" item-content">
                        <div className="item-inner">
                            <div className="item-title-row">
                            <div className="item-title titlelabel">Number</div>
                          </div>
                            <div className="item-subtitle">{contact.number}</div>
                        </div>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

const getContact = (contacts, id) => {
    return contacts[id];
}

const mapStateToProps = (state) => {
  return {
    contact: getContact(state.contacts, state.selected)
  }
}

export default connect(
  mapStateToProps
)(ContactDetails);

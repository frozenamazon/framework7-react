import React, { Component } from 'react'
import ContactList from './ContactList'
import ContactListNavbar from './ContactListNavbar'
import Contact from './Contact'
import ContactNavbar from './ContactNavbar'
import NewContactPopup from './NewContactPopup'

const MainView = (props) => {
    return (
        <div className="full-page">
        <div className="views">
            <div className="view view-main navbar-fixed">
                <div className="navbar">
                    <ContactListNavbar/>
                    <ContactNavbar/>
                </div>
                <div className="pages navbar-through toolbar-through">
                        <ContactList/>
                        <Contact/>
                </div>
            </div>
        </div>
        <div className="popup popup-new">
            <NewContactPopup/>
        </div>
        </div>
    )
}

export default MainView

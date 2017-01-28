import React, { Component } from 'react'
import {f7,mainView} from './MainView'

const ContactNavbar = () => {
    function handleSave() {
        
    }
    return (
        <div className="navbar-inner">
            <div className="left sliding">
                <a href="#" className="close-popup link" onClick={handleSave}>
                    <span>Cancel</span>
                </a>
            </div>
            <div className="center contacts-header">New Contact</div>
            <div className="right contact-save-link">
                <a href="#" className="close-popup link" onClick={handleSave}>
                    <span>Save</span>
                </a>
            </div>
        </div>
    )
}

export default ContactNavbar;

import React, { Component } from 'react'



const ContactListNavbar = () => {
    return (
        <div className="navbar-inner">
            <div className="left"></div>
            <div className="center">Contacts</div>
            <div className="right">
                <a href="#" data-popup=".popup-new" className="open-popup"><i className="icon icon-plus">+</i></a>
            </div>
        </div>
    )
}

export default ContactListNavbar;

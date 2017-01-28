import React, { Component } from 'react'

const ContactNavbar = () => {
    function handleSave() {}
    return (
        <div className="navbar-inner cached" data-page="contact">
            <div className="left sliding">
                <a href="#" className="back link">
                    <i className="icon icon-back"></i>
                    <span>Back</span>
                </a>
            </div>
            <div className="center contacts-header">Contact</div>
            <div className="right contact-save-link" onClick={handleSave}>
                <a href="#" className="link">
                    <span>Save</span>
                </a>
            </div>
        </div>
    )
}

export default ContactNavbar;

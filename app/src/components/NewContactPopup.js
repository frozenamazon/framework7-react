import React, { Component } from 'react'

const NewContactNavbar = () => {
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

const NewContactPopupView = () => {
    return (
        <div className="page">
        <div className="page-content">
            <div className="list-block">
                <form id="contactEdit">
                    <ul>
                        <li className="item-content">
                          <div className="item-inner">
                            <div className="item-input">
								<input type="text" name="firstName" placeholder="First name" />
							</div>
                          </div>
                        </li>
                        <li className="item-content">
                          <div className="item-inner">
                            <div className="item-input">
								<input type="text" name="lastName" placeholder="Last name" />
							</div>
                          </div>
                        </li>
                        <li className="item-content">
                          <div className="item-inner">
                            <div className="item-input">
								<input type="text" name="phone" placeholder="Phone" />
							</div>
                          </div>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        </div>
    )
}


const NewContactPopup = () => {
    
    return (
        <div className="view">
            <div className="navbar">
                <NewContactNavbar/>
            </div>
            <div className="pages navbar-through toolbar-through">
                <NewContactPopupView/>
            </div>
        </div>
    )
}

export default NewContactPopup;

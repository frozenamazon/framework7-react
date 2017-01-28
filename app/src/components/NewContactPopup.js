import React, { Component } from 'react'

const ContactList = () => {
    
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
								<input type="number" name="phone" placeholder="Phone" />
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

export default ContactList;

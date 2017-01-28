import React, { Component } from 'react'

const ContactList = () => {
    var href = '#contact?id=1';
    return (
        <div data-page="contactlist" className="page">
        <div className="page-content">
            <div className="list-block contacts-list">
                <ul>
                    <li>
                      <a href={href} className=" item-content item-link">
                        <div className="item-media"><i className="ion ion-ios-person"></i></div>
                        <div className="item-inner"><div className="item-title">Test</div></div>
                      </a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default ContactList;

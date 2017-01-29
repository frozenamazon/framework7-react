import React from 'react'
import ReactDOM from 'react-dom'
import MainView from './src/components/MainView'
import contactApp from './src/reducers'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import 'framework7'

var f7 = new Framework7({
    modalTitle: 'F7-React-Redux-Base',
    animateNavBackIcon: true
});

let store = createStore(contactApp)

ReactDOM.render(
    <Provider store={store}>
    <MainView f7={f7} />
    </Provider>,
    document.getElementById('app')
);

var mainView = f7.addView('.view-main', {
    dynamicNavbar: true, domCache: true
});

export {f7,mainView}
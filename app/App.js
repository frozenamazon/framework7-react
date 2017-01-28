import React from 'react'
import ReactDOM from 'react-dom'
import MainView from './src/components/MainView'
import 'framework7'

var f7 = new Framework7({
    modalTitle: 'F7-React-ES2015-Base',
    animateNavBackIcon: true
});

ReactDOM.render(
    <MainView f7={f7} />,
    document.getElementById('app')
);


var mainView = f7.addView('.view-main', {
    dynamicNavbar: true, domCache: true
});

export {f7,mainView}
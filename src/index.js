import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/app';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Popup from "reactjs-popup";
// import Popup from 'react-popup';

ReactDOM.render(
    <Provider store={store}>
      
        <App />
    </Provider>,
    document.getElementById('root')
);

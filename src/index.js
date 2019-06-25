import React from 'react';
import "./scss/index.scss";
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import {HashRouter} from 'react-router-dom';


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>

, document.getElementById('root'));


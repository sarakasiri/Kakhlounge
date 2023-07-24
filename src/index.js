import React from 'react';

import './index.css';

import App from './app/App';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

axios.defaults.baseURL = "https://panel.menu.romacafe.ir/";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

);

// reportWebVitals();

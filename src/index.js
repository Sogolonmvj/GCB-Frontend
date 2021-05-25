import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppSecondPage from './AppSecondPage';

import './styles/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <AppSecondPage />
    </React.StrictMode>, 
    document.getElementById('root')
);


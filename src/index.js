import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppSecondPage from './AppSecondPage';
import AppThirdPage from './AppThirdPage';

import './styles/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <AppSecondPage />
        <AppThirdPage />
    </React.StrictMode>, 
    document.getElementById('root')
);


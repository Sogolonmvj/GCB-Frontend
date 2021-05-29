import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppSecondPage from './AppSecondPage';
import AppThirdPage from './AppThirdPage';
import AppFourthPage from './AppFourthPage';

import './styles/main.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <AppSecondPage />
        <AppThirdPage />
        <AppFourthPage />
    </React.StrictMode>, 
    document.getElementById('root')
);


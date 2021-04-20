import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.min.css'

reportWebVitals();

window.MyApp1 = {
    registerComponent: (element, event) => {
        const {onHello} = event || {}
        ReactDOM.render(
            <React.StrictMode>
                <App onHello={onHello}/>
            </React.StrictMode>,
            element
        );
    },
}

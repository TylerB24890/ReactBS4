import React from 'react';
import ReactDOM from 'react-dom';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

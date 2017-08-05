import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import './common/css/base.css';
import './common/css/index.css';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

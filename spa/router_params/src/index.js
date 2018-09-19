import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CustomerApp from './CustomerApp'

ReactDOM.render(<CustomerApp />, document.getElementById('root'));
registerServiceWorker();

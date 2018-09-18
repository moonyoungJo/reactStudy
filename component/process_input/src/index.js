import React from 'react';
import ReactDOM from 'react-dom';
//import TextForm from './TextForm';
//import CBoxForm from './CBoxForm';
//import TextAreaForm from './TextAreaForm';
//import RadioForm from './RadioForm';
import SelectForm from './SelectForm';

//ReactDOM.render(<TextForm />, document.getElementById('root'));
//ReactDOM.render(<CBoxForm />, document.getElementById('root'));
//ReactDOM.render(<RadioForm items={['choco', 'candy', 'cola']} />, document.getElementById('root'));
ReactDOM.render(<SelectForm items={['choco', 'candy', 'cola']} />, document.getElementById('root'));
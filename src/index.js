import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css'
import './index.css';

import App from './App';

import * as serviceWorker from './serviceWorker';

import Badge from './components/Badge';

ReactDOM.render(<Badge 
  firstName="Pako" 
  lastName="Díaz" 
  jobTitle="Full Stack" 
  twitter="jfcodiaz" 
  avatarURL="http://gravatar.com/avatar/001650e253ed06b724d0e8eae545c6db?s=120"
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

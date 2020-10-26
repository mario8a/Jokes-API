import React from 'react';
import ReactDOM from 'react-dom';
import { JokeApp } from './JokeApp';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <JokeApp />
  </React.StrictMode>,
  document.getElementById('root')
);
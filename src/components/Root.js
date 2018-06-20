import React, { Component } from 'react';
import App from './App';
import { HashRouter } from 'react-router-dom'
export default class Root extends Component {
  render() {

    return (
        <HashRouter>
          <App />
        </HashRouter>
    );
  }
}



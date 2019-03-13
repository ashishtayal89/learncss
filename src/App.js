import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1><Link to='/'>Learn and Upgrade</Link></h1>
        </header>
        <Routes />
        <div className='footer'>
          @copyright ashishtayal14@gmail.com 2019
        </div>
      </div>
    );
  }
}

export default App;

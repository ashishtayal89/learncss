import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';
import BreadCrumb from './components/BreadCrumb'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1><Link to='/'>Learn and Upgrade</Link></h1>
        </header>
        <main>
          <div className="breadCrumb">
            <BreadCrumb />
          </div>
          <Routes />
        </main>
        <footer>
          <span>@copyright ashishtayal14@gmail.com 2019</span>
        </footer>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { withRouter } from 'react-router-dom';
// internal components
import NavBar from './components/NavBar/NavBar';
import Routes from './config/routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default withRouter(App);

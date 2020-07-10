import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Dogdetails from './components/Dogdetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Route exact path="/" component={Home} />
        <Route path="/dogs/:id" component={Dogdetails} /> 
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={HomeContainer}></Route>
        <Route exact path='/customers' component={CustomerContainer}></Route>
      </div>
    </Router>

  );
}

export default App;

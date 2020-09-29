import React from 'react';
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Post from './components/Post';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contacts' component={Contacts} />
      <Route exact path='/post:id' component={Post}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

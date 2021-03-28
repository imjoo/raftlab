import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Form from './components/Form'
import Home from './components/Home'
import Dashboard from './components/Dashboard'


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <h2>RELATIONSHIP BUILDER APP (www.relationshipbuilder.com)</h2>
            <div>
                  <Link exact to="/">Home</Link>
                  <NavLink  exact  activeclassName="active" to="/edit">Form</NavLink>
                  <NavLink  exact  activeclassName="active" to="/dash">Dashboard</NavLink>

            </div>
          <br/>
         <Route path="/" exact component={Home} />
         <Route path="/edit/:id?" component={Form} />
        <Route path="/dash" component={Dashboard} />
        </div>
        </Router>
    );
  }
}

export default App;

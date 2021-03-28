
/*
*
Entry point for the application that contains the routes as well.
*
*/


import React, { Component } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import Form from './components/Form'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Users from './components/Users'
import User from './components/User'
import Tag from './components/Tag'




class App extends Component {
  render() {
    return (
        <div className="App">
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a href="/dashboard" className="navbar-brand">
                RELATIONSHIP BUILDER
              </a>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/users"} className="nav-link">
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add/tag"} className="nav-link">
                    Tag People
                  </Link>
                </li>
              </div>
            </nav>
          </div>
          <br/>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/dashboard"]} component={Home} />
              <Route path="/edit/:name?" component={Form} />
              <Route exact path="/users" component={Users} />
              <Route path="/users/:name" component={User} />
              <Route path="/add/tag" component={Tag} />
            </Switch>
          </div>
        </div>  
    );
  }
}

export default App;

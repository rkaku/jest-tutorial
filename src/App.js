import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, NavLink, useLocation, Switch } from 'react-router-dom'

function App () {
  const location = useLocation()
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul>
            {
              location.pathname !== '/' && (
                <li>
                  <NavLink
                    className="App-link"
                    to="/"
                    exact
                    activeClassName="active-link"
                  >
                  </NavLink>
                </li>
              )
            }
            {
              location.pathname !== '/wallet' && (
                <li>
                  <NavLink
                    className="App-link"
                    to="/wallet"
                    exact
                    activeClassName="active-link"
                  >
                  </NavLink>
                </li>
              )
            }
            {
              location.pathname !== '/pool' && (
                <li>
                  <NavLink
                    className="App-link"
                    to="/pool"
                    exact
                    activeClassName="active-link"
                  >
                  </NavLink>
                </li>
              )
            }
            {
              location.pathname !== '/chain' && (
                <li>
                  <NavLink
                    className="App-link"
                    to="/chain"
                    exact
                    activeClassName="active-link"
                  >
                  </NavLink>
                </li>
              )
            }
          </ul>
          <Switch>
            <Route path="/wallet" />
            <Route path="/pool" />
            <Route path="/chain" />
            <Route path="/" component={ App } />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
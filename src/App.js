import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './Menu';
import About from './About';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/'>
          <Header />
          <Menu />
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;

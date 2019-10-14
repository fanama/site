import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Markdown from "./component/Markdown"
import Latex2 from "./component/Latex2"
import Pereptron from "./component/Perceptron"
import Home from "./component/Home"
import video from "./component/Video"
import Video from './component/Video';
import Draw from './component/Draw'

function App() {
  return (<div >
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light "> 
      <div className="navbar-brand" >Fana_RK</div>
        <ul className="sidebar-nav navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li> 
            <li className="nav-item">
              <Link to="/Edit">Markdown</Link>
            </li>
            <li className="nav-item">
              <Link to="/Latex">Latex</Link>
            </li>
             
        </ul>
      </nav>


    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/Edit"><Markdown /></Route>
      <Route path="/Perceptron"><Pereptron /></Route>
      <Route path="/video"><Video /></Route>
      <Route path="/Draw"><Draw /></Route>
      <Route path="/Latex"><Latex2 /></Route>

    </Switch>
    </Router></div>
  );
}

function Error() {
  return (
    <div>
      <h2>Error</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
  }
export default App

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Link, Route ,HashRouter} from 'react-router-dom';
import Home from './Home';



function App() {
  return (
    <HashRouter>
       <Route exact path="/" component={Home}></Route>
    </HashRouter>  
  );
}

export default App;

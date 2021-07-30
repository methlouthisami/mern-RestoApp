import React from 'react';
import './App.css';
import Header from './header'
import Home from './acceuil'
import Panier from './Panier'
import Plats from './Plats'
import Signup from './signup.js'
import Admin from './admin'
import Switch from 'react-dom'
import { BrowserRouter, BrowserRouter as  Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
   
      <main>
        <Switch>

          <Route exact path="/admin" component={Admin} />
          <Route exact path="/acceuil" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/Plats" component={Plats} />
          <Route exact path="/Panier" component={Panier} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;

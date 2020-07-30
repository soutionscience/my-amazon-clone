import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Componets/Header'

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
    <Switch>
      <Route path="/checkout">
        <h1>Checkout</h1>
      </Route>
      <Route path="/login">
        <h1>login</h1>
      </Route>
      <Route path="/">
        <h1>Home Page</h1>
      </Route>
    </Switch>
    </div>
    </Router>

  );
}

export default App;

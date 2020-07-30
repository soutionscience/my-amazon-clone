import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Componets/Header'
import Home  from './Componets/Home'
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
       <Home />
      </Route>
    </Switch>
    </div>
    </Router>

  );
}

export default App;

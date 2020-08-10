import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Componets/Header'
import Home  from './Componets/Home'
import Checkout from './Componets/Checkout';
import Login from './Componets/Login';
import { useStateValue } from './Componets/StateProvider';
import { auth } from './firebase';
function App() {

  const [{user}, dispatch] = useStateValue();
  //useEffect : peice of code that runs based on a given condition.

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user is logged in
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      }else{
        //user is not logged in
        dispatch(
          { type:"SET_USER",
          user: null}
        )
      }
    })

    return ()=>{
      unsubscribe();
    }

  }, [])
  console.log('user', user)
  return (
    <Router>
    <div className="app">
      {/* <Header /> */}
    <Switch>
      <Route path="/checkout">
       <Checkout />
      </Route>
      <Route path="/login">
        <Login />

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

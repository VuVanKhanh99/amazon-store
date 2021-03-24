import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useStateValue } from './components/StateProvider';
import { auth } from './components/Firebase/Firebase';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(()=>{
    const unsubcribed = auth.onAuthStateChanged((authUser) =>{
      if(authUser){
          dispatch({
            type:'SET_USER',
            user:authUser,
          })
      }else{
        dispatch({
          type:'SET_USER',
          user:null,
        })
      }
    });

    return () => {
      unsubcribed();
    }
  },[]);

  console.log('User is >>> ',user)
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React,{useEffect} from 'react';
//import  {HomePage} from './containers/Homepage/index';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 import {HomePage }from './containers/Homepage/index';
import{ ProductListPage} from './containers/productListPage'
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from './actions';
import ProductDetailsPage from './containers/ProductDetailsPage/index';


function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(()=>{
      if(!auth.authenticate){
        dispatch(isLoggedIn())
      }
  },[auth.authenticate])

  return (
    <div className="App">
    <Router>
    <Switch>
    <Route path="/" exact component={HomePage} />
     <Route path="/:productSlug/:productId/p" component={ProductDetailsPage} />
    <Route path="/:slug" component={ProductListPage} />
   
    </Switch>
    </Router>
    </div>
  );
}

export default App;

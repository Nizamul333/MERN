
import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import {useEffect} from 'react';
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import Profile from "./component/User/Profile";
import store from "./store";
import { loadUser } from "./actions/userAction";

import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";

function App() {
const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  
    store.dispatch(loadUser());
  
   // getStripeApiKey();
  }, []);
  return (
    <Router>
    <Header/>
    {isAuthenticated && <UserOptions user={user} />}
    
<Routes>
<Route path="/" element={<Home/>} />
<Route  path="/product/:id" element={<ProductDetails/>} />
<Route  path="/products" element={<Products/>} />
<Route  path="/products/:keyword" element={<Products/>} />
<Route  path="/search" element={<Search/>} />
<Route  path="/login" element={<LoginSignUp/>} />
<Route  path="/account" element={<Profile/>} />

</Routes> 


    

    <Footer/>
    </Router>
  
  );
}

export default App;

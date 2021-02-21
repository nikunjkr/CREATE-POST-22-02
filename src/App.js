import React, {useEffect} from "react";
import './App.css';
// import {Container, AppBar, Typography} from "@material-ui/core"
import {useDispatch} from "react-redux"
import {getPosts, getUser} from './actions/Posts';

import logo from './logo.png'
import CreatePost from "./components/CreatePost/CreatePost";
import Cookies from 'js-cookie'
import PleaseLogin from "./components/PleaseLogin";

const App = () => {

  
  const dispatch = useDispatch();

  useEffect(() => {
    // forgot to call
    dispatch(getPosts());
    dispatch(getUser());
    console.log("Dispatching");
  }, [dispatch]);
  console.log("w",Cookies.get('access_control_token_cookie_skinder'))
  return (
    <>
    <div className="app__header">
          <a href="https://skinder-5d70f.web.app/"> <img className="app__headerImage" src={logo} alt="Logo"/></a>

      </div>
    <div className="app">
      
      {Cookies.get('access_control_token_cookie_skinder') ? <CreatePost/> :<PleaseLogin/>}
     
    </div>
    </>
  )
    
    
  
}

export default App;

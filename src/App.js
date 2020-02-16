import React from 'react';
// {Component}
import {
        HashRouter,
        Route,
        // Link,
        // Switch,
        // NavLink
      } 
  from 'react-router-dom';
import './main.scss';

import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
// import GiveAwayYourStuff from "./components/GiveAwayYourStuff";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <>
          <Route exact path="/" component={Home}></Route>
          {/* <Route exact path="/oddaj-rzeczy" component={GiveAwayYourStuff}></Route> */}
          <Route exact path="/logowanie" component={LogIn}></Route>
          {/* <Route exact path="/rejestracja" component={SingIn}></Route> */}
          {/* <Route exact path="/wylogowano" component={LoggedOut}></Route> */}
        </>
      </HashRouter>
    </div>
  );
}

export default App;

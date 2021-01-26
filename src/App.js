import React, { Component } from 'react';
import {Switch,Route,Redirect} from "react-router-dom"
import { Home } from "./home/index.js";
import List from "./list/List.jsx"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/list" component={List}></Route>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    </div>
  );
}

export default App;

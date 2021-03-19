import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect,} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Tabshow from "./components/Tab/Tabshow"; 



function App() {
  return (
    <BrowserRouter>
    <Sidebar />
    <Switch>
      <Route path="/input" component={Tabshow} />
      <Redirect to="/dashboard" />
    </Switch>
    {/* <Footer /> */}
  </BrowserRouter>
  );
}

export default App;

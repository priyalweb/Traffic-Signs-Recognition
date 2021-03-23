import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Tabshow from "./components/Tab/Tabshow";
import ConnectToServer from './components/ConnectToServer/ConnectToServer'
import Dashboard from './components/Dashboard/Dashboard'


function App() {

  const [url, setUrl] = useState('')

  return (
    <BrowserRouter>
      <Sidebar />
      <ConnectToServer url={url} setUrl={setUrl} />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/input" render={() => <Tabshow url={url} />} />
        <Redirect to="/dashboard" />
      </Switch>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

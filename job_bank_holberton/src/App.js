import React from 'react';
import './App.css';
import { Login1 } from './Paginas/Login1/Login1';
import { Login2 } from './Paginas/Login2/Login2';
import { NotFoundPage } from './Paginas/NotFoundPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Login1}/>
          <Route path="/login" component={LoginUser}/>

          <Route path="/404" component={NotFoundPage}/>
          <Route path="*">
            <Redirect to="/404"/>
          </Route>
      </Switch>
    </Router>
  );
}

function LoginUser() {
  return (
    <Switch>
      <Route exact path="/login/estudiante" component={Login2}/>

      <Route exact path="/login/empresa" component={Login2}/>

      <Route exact path="/login/admin" component={Login2}/>
      <Route path="*">
            <Redirect to="/404"/>
          </Route>
    </Switch>
  )
}
export default App;

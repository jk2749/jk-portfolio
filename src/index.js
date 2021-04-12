import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { About } from './pages/about/About';
import Main from './pages/main/Main';
import RightMenu from './pages/shared/RightMenu';
import Logo from './pages/shared/Logo';
import { Works } from './pages/works/Works';
import { Contact } from './pages/contact/Contact';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/**/about' component={About}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/**/works' component={Works}/>
      <Route exact path='/works' component={Works}/>
      <Route exact path='/**/portfolio' component={Main}/>
      <Route exact path='/portfolio' component={Main}/>
      <Route exact path='/**/contact' component={Contact}/>
      <Route exact path='/contact' component={Contact}/>
    </Switch>
    <Route component={Logo}/>
    <Route component={RightMenu}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

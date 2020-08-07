import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'

import './assets/stylesheets/App.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import Toast from './components/utilities/Toast';
import Blocker from './components/utilities/Blocker';


import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

import CustomerHome from './screens/Home/CustomerHome';

function App(props) {
  console.log(props);
  const { toast, blocker } = props.data.util;
  return (
    <HashRouter basename="/">
      {toast.display && <Toast data={toast} />}
      {blocker.display && <Blocker />}
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/customer-home" component={CustomerHome} />
    </HashRouter>
  );
}

//fetch what you want from the store
const mapStateToProps = (state) => {
  return {
      data: state 
  }
}

export default connect(mapStateToProps, null)(App);

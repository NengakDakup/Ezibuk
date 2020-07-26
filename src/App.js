import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import './assets/stylesheets/App.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Home from './screens/Home';
import Login from './screens/Login';

function App() {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </HashRouter>
  );
}

export default App;

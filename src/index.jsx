import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ButtonAppBar from './Containers/Header';
import SimpleFooter from './Containers/Footer';
import store from './Store/store';
import People from './Containers/People';
import Planets from './Containers/Planets';
import Home from './Containers/Home';

const application = (

  <Provider store={store}>
    <BrowserRouter>
      <ButtonAppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/planets">
          <Planets />
        </Route>
      </Switch>
      <SimpleFooter />
    </BrowserRouter>
  </Provider>

);

ReactDOM.render(application, document.getElementById('root'));

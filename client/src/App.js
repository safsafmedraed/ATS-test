import React from 'react';
import Products from './Component/Products'
import SingleProd from './Component/SingleProd'
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Products} />
          <Route path="/Single/:id" component={SingleProd} />
          <Redirect to="/home" />
        </Switch>

      </BrowserRouter>
    </Provider>
  );
}

export default App;

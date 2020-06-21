import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './routes/Home';
import Auth from './routes/Auth';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Auth} path="/login" />
    </BrowserRouter>
  )
};

export default Routes;

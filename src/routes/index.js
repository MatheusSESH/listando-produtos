import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Products from '../pages/products/Products';
import Details from '../pages/details/Details';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/product/:product_id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

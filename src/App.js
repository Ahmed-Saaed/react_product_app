import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import ProductList from './component/ProductList';
import AddApp from './component/AddProduct';

class App extends Component {
  state = {
    products: [
      {SKU: 1, name: 'acme DISC', price: 1, size: '700 mb'},
      {SKU: 2, name: 'acme DISC', price: 1, size: '700 mb'},
      {SKU: 3, name: 'acme DISC', price: 1, size: '700 mb'},
      {SKU: 4, name: 'acme DISC', price: 1, size: '700 mb'},
      {SKU: 5, name: 'War and Peace', price: 20, weight: '2kg'},
      {SKU: 6, name: 'War and Peace', price: 20, weight: '2kg'},
      {SKU: 7, name: 'War and Peace', price: 20, weight: '2kg'},
      {SKU: 8, name: 'War and Peace', price: 20, weight: '2kg'},
      {SKU: 9, name: 'chair', price: 40, Dimension: '24 x 45 x 15'},
      {SKU: 10, name: 'chair', price: 40, Dimension: '24 x 45 x 15'},
      {SKU: 11, name: 'chair', price: 40, Dimension: '24 x 45 x 15'},
      {SKU: 12, name: 'chair', price: 40, Dimension: '24 x 45 x 15'},
    ],
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path='/' exact render={(props) => <ProductList />} />
        </Switch>
        <Switch>
          <Route path='/add-product' render={(props) => <AddApp />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

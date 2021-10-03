import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router';

import ProductList from './component/ProductList';
import AddProduct from './component/AddProduct';
import NotFound from './component/NotFound';

class App extends Component {
  state = {
    products: [
      {SKU: '1', name: 'acme DISC', price: 1, specific: 'Size: 700 MB'},
      {SKU: '2', name: 'acme DISC', price: 1, specific: 'Size: 700 MB'},
      {SKU: '3', name: 'acme DISC', price: 1, specific: 'Size: 700 MB'},
      {SKU: '4', name: 'acme DISC', price: 1, specific: 'Size: 700 MB'},
      {SKU: '5', name: 'War and Peace', price: 20, specific: 'Weight: 2kg'},
      {SKU: '6', name: 'War and Peace', price: 20, specific: 'Weight: 2kg'},
      {SKU: '7', name: 'War and Peace', price: 20, specific: 'Weight: 2kg'},
      {SKU: '8', name: 'War and Peace', price: 20, specific: 'Weight: 2kg'},
      {SKU: '9', name: 'chair', price: 40, specific: 'Dimension: 24 x 45 x 15'},
      {
        SKU: '10',
        name: 'chair',
        price: 40,
        specific: 'Dimension: 24 x 45 x 15',
      },
      {
        SKU: '11',
        name: 'chair',
        price: 40,
        specific: 'Dimension: 24 x 45 x 15',
      },
      {
        SKU: '12',
        name: 'chair',
        price: 40,
        specific: 'Dimension: 24 x 45 x 15',
      },
    ],
    sku: '',
    name: '',
    price: null,
    size: '',
    weight: '',
    dimension: {height: '', width: '', length: ''},
    checked: false,
  };

  skuChange = (e) => {
    this.setState({sku: e.target.value});
  };

  nameChange = (e) => {
    this.setState({name: e.target.value});
  };

  priceChange = (e) => {
    this.setState({price: parseInt(e.target.value)});
  };
  sizeChange = (e) => {
    this.setState({size: 'size: ' + parseInt(e.target.value)});
  };
  weightChange = (e) => {
    this.setState({weight: 'weight :' + e.target.value});
  };
  heightChange = (e) => {
    let dimension = Object.assign(
      {height: e.target.value},
      this.state.dimension
    );

    this.setState({dimension});
  };
  widthChange = (e) => {
    let dimension = Object.assign(
      {width: e.target.value},
      this.state.dimension
    );

    this.setState({dimension});
  };
  lengthChange = (e) => {
    let dimension = Object.assign(
      {length: e.target.value},
      this.state.dimension
    );

    this.setState({dimension});
  };

  handleSubmit = (e, product) => {
    e.preventDefault();
    // clone our product
    let products = [...this.state.products];
    // const index = products.indexOf(product);
    // products[index] = {...products[index]};
    //edit
    const newProduct = {
      sku: this.state.sku,
      name: this.state.name,
      price: this.state.price,
      specific: this.state.size,
    };
    products.push(newProduct);
    this.setState({products});
    console.log(products);

    this.props.history.push('/');
  };

  handleChecked = () => {
    this.setState({checked: !this.state.checked});
  };

  handleDelete = (props) => {
    if (this.state.checked === true) {
      console.log(props);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => (
              <ProductList
                products={this.state.products}
                handleChecked={this.handleChecked}
                handleDelete={this.handleDelete}
                checked={this.state.checked}
                {...props}
              />
            )}
          />
          <Route
            path='/add-product'
            render={(props) => (
              <AddProduct
                products={this.state.products}
                skuChange={this.skuChange}
                nameChange={this.nameChange}
                priceChange={this.priceChange}
                sizeChange={this.sizeChange}
                sku={this.state.sku}
                name={this.state.name}
                price={this.state.price}
                size={this.state.size}
                handleSubmit={this.handleSubmit}
                {...props}
              />
            )}
          />
          <Route path='/notfound' component={NotFound} />
          <Redirect to='/notfound' />
        </Switch>
        <footer className='bg-dark text-white text-center p-1 mt-4 d-flex justify-content-center'>
          <p className='pt-1'>Scandiweb test assignment</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default withRouter(App);

import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router';

import ProductList from './component/ProductList';
import AddProduct from './component/AddProduct';
import NotFound from './component/NotFound';

class App extends Component {
  state = {
    products: [
      {
        SKU: '1',
        name: 'acme DISC',
        price: 1,
        specific: 'Size: 700 MB',
        checked: false,
      },
      {
        SKU: '2',
        name: 'acme DISC',
        price: 1,
        specific: 'Size: 700 MB',
        checked: false,
      },
      {
        SKU: '3',
        name: 'acme DISC',
        price: 1,
        specific: 'Size: 700 MB',
        checked: false,
      },
      {
        SKU: '4',
        name: 'acme DISC',
        price: 1,
        specific: 'Size: 700 MB',
        checked: false,
      },
      {
        SKU: '5',
        name: 'War and Peace',
        price: 20,
        specific: 'Weight: 2kg',
        checked: false,
      },
      {
        SKU: '6',
        name: 'War and Peace',
        price: 20,
        specific: 'Weight: 2kg',
        checked: false,
      },
      {
        SKU: '7',
        name: 'War and Peace',
        price: 20,
        specific: 'Weight: 2kg',
        checked: false,
      },
      {
        SKU: '8',
        name: 'War and Peace',
        price: 20,
        specific: 'Weight: 2kg',
        checked: false,
      },
      {
        SKU: '9',
        name: 'chair',
        price: 40,
        specific: 'Dimension: 24 x 45 x 15',
        checked: false,
      },
      {
        SKU: '10',
        name: 'chair',
        price: 40,
        specific: 'Dimension: 24 x 45 x 15',
        checked: false,
      },
      {
        SKU: '11',
        name: 'chair',
        price: 40,
        specific: 'Dimension: 24 x 45 x 15',
        checked: false,
      },
      {
        SKU: '12',
        name: 'chair',
        price: 40,
        specific: 'Dimension: 24 x 45 x 15',
        checked: false,
      },
    ],
    switcher: '',
    SKU: '',
    name: '',
    price: '',
    size: '',
    weight: '',
    height: '',
    width: '',
    length: '',
  };

  // control all our input changes

  handleChange = (e) => {
    this.setState({switcher: e.target.value});
  };

  skuChange = (e) => {
    this.setState({SKU: e.target.value});
  };

  nameChange = (e) => {
    this.setState({name: e.target.value});
  };

  priceChange = (e) => {
    this.setState({price: parseInt(e.target.value)});
  };
  sizeChange = (e) => {
    this.setState({size: 'size: ' + parseInt(e.target.value) + ' mb'});
  };
  weightChange = (e) => {
    this.setState({weight: 'weight: ' + parseInt(e.target.value) + ' kg'});
  };
  heightChange = (e) => {
    this.setState({height: 'Dimension: ' + e.target.value});
  };

  widthChange = (e) => {
    this.setState({width: ' x ' + e.target.value + ' x '});
  };
  lengthChange = (e) => {
    this.setState({length: e.target.value});
  };

  // handle the save button

  handleSubmit = (e, product) => {
    e.preventDefault();
    // clone our product
    let products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = {...products[index]};
    //edit
    let specific = () => {
      if (this.state.switcher === 'furniture') {
        return this.state.height + this.state.width + this.state.length;
      } else if (this.state.switcher === 'dvd') {
        return this.state.size;
      } else {
        return this.state.weight;
      }
    };
    const newProduct = {
      SKU: this.state.SKU,
      name: this.state.name,
      price: this.state.price,
      specific: specific(),
    };
    products.push(newProduct);
    this.setState({products});

    this.props.history.push('/');
  };

  handleCheck = (product) => {
    // clone our product
    let products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = {...products[index]};

    //edit
    products[index].checked = !products[index].checked;
    console.log(products);
    this.setState({products});
  };
  handleDelete = () => {
    let products = this.state.products.filter((p) => p.checked === false);
    products.map((e) => (e.checked = false));

    this.setState({products});
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
                handleCheck={this.handleCheck}
                handleDelete={this.handleDelete}
                {...props}
              />
            )}
          />
          <Route
            path='/add-product'
            render={(props) => (
              <AddProduct
                products={this.state.products}
                switcher={this.state.switcher}
                handleChange={this.handleChange}
                skuChange={this.skuChange}
                nameChange={this.nameChange}
                priceChange={this.priceChange}
                sizeChange={this.sizeChange}
                weightChange={this.weightChange}
                heightChange={this.heightChange}
                widthChange={this.widthChange}
                lengthChange={this.lengthChange}
                SKU={this.state.SKU}
                name={this.state.name}
                price={this.state.price}
                size={this.state.size}
                weight={this.state.weight}
                height={this.state.height}
                width={this.state.width}
                length={this.state.length}
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

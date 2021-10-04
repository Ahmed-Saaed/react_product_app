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
    switcher: '',
    sku: '',
    name: '',
    price: '',
    size: '',
    weight: '',
    height: '',
    width: '',
    length: '',
    // checkedBoxes: new Array(this.state.products.length).fill(false),
  };

  // control all our input changes

  handleChange = (e) => {
    this.setState({switcher: e.target.value});
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
    // const index = products.indexOf(product);
    // products[index] = {...products[index]};
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
      sku: this.state.sku,
      name: this.state.name,
      price: this.state.price,
      specific: specific(),
    };
    products.push(newProduct);
    this.setState({products});
    console.log(products);

    this.props.history.push('/');
  };

  // ToDo here where I failed at link the checkboxes with the mass delete button :

  // // handleOnChange = (position) => {
  // //  let updateCheckBoxes = this.state.checkedBoxes.map((item, index) =>
  //  //   index === position ? !item : item
  // //  );

  // //  this.setState({checkedBoxes: updateCheckBoxes});
  // // };
  // // handleDelete = (props) => {
  //  // if (this.state.checked === true) {
  //   //  console.log(props);
  // //  }
  // //};

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
                // handleOnChange={this.handleOnChange}
                handleDelete={this.handleDelete}
                // checkedBoxes={this.state.checkedBoxes}
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
                sku={this.state.sku}
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

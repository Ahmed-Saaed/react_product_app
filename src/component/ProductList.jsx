import React from 'react';
import Product from './product';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {

  handleSelect = (e) => {
    console.log('ay 7agaaa')
  }

  render() { 
    return(
      <React.Fragment>
        {/* add the nav bar */}
        <nav className="navbar  navbar-dark bg-dark ">
          <a className="nav-link disabled ms-4" href='/'>product List</a>
          <div className = 'd-flex'>
          <Link to = '/add-product' className="btn btn-primary btn-md me-2 justify-self-end" role="button" aria-disabled="true">Add</Link>
          <button onClick = {this.props.handleDelete} id ='delete-product-btn' className = "btn btn-danger btn-md me-4 ">mass delete</button>
          </div>
        </nav>
        <div className ='container pt-3 m-auto row'>
          {this.props.products.map((product ,index) => (
            
              <Product
                key = {index}
                product={product}
                SKU={product.SKU}
                name={product.name}
                price={product.price}
                specific={product.specific}
                handleChecked={this.props.handleChecked}
                checked={this.props.checked}
                handleSelect={this.handleSelect}
              />
          ))}
        </div>

      </React.Fragment>
    )
    
  }
}


export default ProductList;
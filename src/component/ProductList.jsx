import React from 'react';
import Product from './product';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {


  render() { 
    return(
      <React.Fragment>
        {/* add the nav bar */}
        <nav className="navbar  navbar-dark bg-dark ">
          <a className="nav-link disabled ms-4" href='/'>product List</a>
          <div className = 'd-flex'>
            <button className = 'btn btn-primary btn-md me-3 justify-self-end'>
          <Link to = '/add-product' className="text-white text-decoration-none" role="button" aria-disabled="true">Add</Link>
          </button>
          <button onClick = {this.props.handleDelete} id ='delete-product-btn' className = "btn btn-danger btn-md me-4 ">mass delete</button>
          </div>
        </nav>
        <div className ='container pt-3 m-auto row'>
          {this.props.products.map((product,index) => (
              <Product
                key = {index}
                checked ={product.checked}
                product={product}
                SKU={product.SKU}
                name={product.name}
                price={product.price}
                specific={product.specific}
                handleCheck={this.props.handleCheck}
              />
          ))}
        </div>
      </React.Fragment> 
    )
    
  }
}


export default ProductList;
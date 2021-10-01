import React from 'react';

class ProductList extends React.Component {
  render() { 
    return(
      <React.Fragment>

        {/* add the nav bar */}

        <ul className="nav nav-pills dark nav-justified">
          <li className="nav-item">
            <a className="nav-link disabled" href='/'>product List</a>
          </li>
          <li className="nav-item">
            <button><a className="nav-link active" aria-current="page" href="/add-product">add</a></button>
          </li>
          <li className="nav-item">
            <button>mass delete</button>
          </li>
        </ul>

      </React.Fragment>
    )
    
  }
}


export default ProductList;
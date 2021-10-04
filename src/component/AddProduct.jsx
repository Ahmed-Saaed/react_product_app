import React from 'react';
import { Link } from 'react-router-dom';
import Options from './formOptions';

class AddProduct extends React.Component {

  render() { 
    return (
      // our second page 
      <React.Fragment>
              <form id = 'product-form' className ="" action="">
                {/* add the nav bar */}
        <nav className="navbar  navbar-dark bg-dark">
          <a className="nav-link disabled ms-4" href='/'>add product</a>
          <div className = 'd-flex'>
          <button onClick = {this.props.handleSubmit} className = "btn btn-primary btn-md justify-self-end ">save</button>
          <Link to = '/' className="btn btn-warning btn-md mx-4 " role="button" aria-disabled="true">cancel</Link>
          </div>
        </nav>
              {/* our controled form  */}
          <div className = 'container'>
          <input id = 'sku' onChange = {this.props.skuChange} value = {this.props.sku} className="form-control p-3 my-5"  type="text" name = 'SKU' placeholder ='#SKU' required/>
          <input id = 'name' onChange = {this.props.nameChange} value = {this.props.name} className="form-control p-3 my-5" type="text" name = 'name' placeholder ='name'required/>
          <input id = 'price' onChange = {this.props.priceChange} value = {this.props.price} className="form-control p-3 my-5" type="text" name = 'price' placeholder = 'price' required/>
          <input className="form-control p-3 my-5" list="datalistOptions" id="product-type" placeholder= 'choose the product type'
          onChange = {this.props.handleChange} value = {this.props.switcher} required/>
          <datalist id="datalistOptions" >
            <option value="dvd"/>
            <option value="book"/>
            <option value="furniture"/>
          </datalist>
          <Options switcher = {this.props.switcher}
                              sizeChange = {this.props.sizeChange}
                              weightChange = {this.props.weightChange}
                              heightChange = {this.props.heightChange}
                              widthChange = {this.props.widthChange}
                              lengthChange = {this.props.lengthChange}                          
          />
          </div>
        </form>
      </React.Fragment>
    
    )}
}
 
export default AddProduct;
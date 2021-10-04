import React from 'react';

class Product extends React.Component {
  constructor(){
    super()
    this.state = {
      checked : false
    }
  }



  render(){ 
        // product card 
    return (
    <React.Fragment>
      <div className = ' col-md-3 col-sm-6 col-xs-12' >
          <div className ='card text-white bg-dark p-2 my-3 text-center' >  
          <input  onChange={this.props.handleOnChange}
                    // Checked={this.props.checked}
                    type='checkbox'
                    name='delete'
                    id='checkbox'
                    className = 'ms-2 delete-checkbox'
                    style = {{cursor : 'pointer',}} />
              <label htmlFor="checkbox">
              <div className ='card-header '>{this.props.product.name}</div>
              <div className ='card-body'>
                <h5 className ='card-title'>{this.props.product.SKU}</h5>
                <p className ='card-text'>{this.props.product.price} $</p>
                <p className ='card-text'>{this.props.product.specific}</p>
              </div>
              </label>
          </div>
      </div>
    
    </React.Fragment>);
  }
}
export default Product;
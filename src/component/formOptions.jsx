import React from 'react';

class Options extends React.Component {
  // sorry for using if statments didn't how to do it with other ways in react 

  render() { 
      if (this.props.switcher === 'dvd') { return(
        <input id = 'size' onChange = {this.props.sizeChange} value = {this.props.size} className="form-control p-3 my-5"  type="text" name = 'DVD' placeholder ='Please, provide size' required/>
      )}else if(this.props.switcher === 'book'){ return (
        <input id = 'weight' className="form-control p-3 my-5" type="text" name = 'book' placeholder ='Please, provide weight'required/>
      )}else if(this.props.switcher === 'furniture'){return(
        <React.Fragment>
        <input id = 'height'className="form-control p-3 my-5" type="text" name = 'furniture' placeholder = 'Please, provide height daimension' required/>
        <input id = 'width'className="form-control p-3 my-5" type="text" name = 'furniture' placeholder = 'Please, provide width daimension' required/>
        <input id = 'length'className="form-control p-3 my-5" type="text" name = 'furniture' placeholder = 'Please, provide length daimension' required/>
      </React.Fragment>
      )}else{
        return('')
      }  
  }
}

export default Options;
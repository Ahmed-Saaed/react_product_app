import React from 'react';

class AddApp extends React.Component {
  render() { 
    return (
      <React.Fragment>
        <ul className="nav nav-pills dark nav-justified">
          <li className="nav-item">
            <a className="nav-link disabled" href='/'>Add Product</a>
          </li>
          <li className="nav-item">
            <button>save</button>
          </li>
          <li className="nav-item">
            <button>cancel</button>
          </li>
        </ul>
      </React.Fragment>
    
    )}
}
 
export default AddApp;
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import product from '../product';

export default class Image extends Component {
  render() {
    return (
      <div>
             <div>
                 {product.image}
             </div>
      </div>
    )
    
    
  }
}



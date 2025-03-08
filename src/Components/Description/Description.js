import React, { Component } from 'react'
import '../product.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import product from '../product.js';


export default class test extends Component {
  render() {
    return (
      <div>
          <p>{product.description}</p>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className='products'>
            {this.props.products.map(product) => {
                
            }}
        </ul>
      </div>
    )
  }
}

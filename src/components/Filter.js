import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className='filter'>
        <div className='filter-result'>{this.props.count} Products</div>
        <div className='filter-sort'>
          Order
          <select value={this.porps.size} onChange={this.props.sortProducts}>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className='filter-size'>
          Filter
          <select>
            <option value="">All</option>
            <option value="Xs">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXl">XXL</option>
          </select>
        </div>
      </div>
    )
  }
}

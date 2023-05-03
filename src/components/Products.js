import React, { Component } from 'react';
import formatCurrency from '../Utl';
import Fade from 'react-reveal/Fade
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';

export default class Products extends Component {
 constructor (props) {
    super();
    this.state = {
      product: null,
    };
  }
  openModal = (product) => {
    this.setState({product});
  }
  closeModal = () => {
    this.setState({product:null});
  }
 render() {
    return (
      <div>
      <Fade bottom cascade>
        <ul className='products'>
            {this.props.products.map((product) => (
                <li key={product._id}>
                    <div className='product'>
                        <a href={"#" + product._id}>
                            <img src={product.image} alt={product.title}></img>
                            <p>{product.title}</p>
                        </a>
                        <div className='product-price'>
                            <div>{formatCurrency(product.price)}</div>
                            <button onClick={() => this.props.addToCart(product)} className='button primary'>Add To Cart</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
       </Fade>
      </div>
    )
  }
}

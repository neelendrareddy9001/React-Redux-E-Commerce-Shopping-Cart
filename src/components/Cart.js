import React, { Component } from 'react'
import formatCurrency from '../Utl';

export default class Cart extends Component {
  render() {
    const {cartItems} = this.props;
    return (
      <div>
        {cartItems.length === 0?(
            <div className='cart cart-header'>Cart is empty</div>
        ) : (
            <dv className="cart cart-header">
                You have {cartItems.length} in the cart{" "}
            </dv>
        )}
        <div className='cart'>
            <ul className='cart-items'>
                {cartItems.map(item => (
                    <li key={item._id}>
                        <div>
                            <img src={item.image} alt={item.title}></img>
                        </div>
                        <div>
                        <div>{item.title}</div>
                        <div className='right'>
                            {formatCurrency(item.price)} x {item.count}{" "}
                            <button 
                                className='button'
                                onClick={() => this.props.removeFromCart(item)}
                            >Remove</button>
                        </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      </div>
      </div>
    )
  }
}

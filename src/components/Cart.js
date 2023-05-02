import React, { Component } from 'react'
import formatCurrency from '../Utl';

export default class Cart extends Component {
  constructor(props) {
        super();
        this.state = {
            name: "",
            email: "",
            address: "",
            showCheckOut: false
        };
    }
    hnadleInput = (e) => {
        this.setState({[e.target.nam]: e.target.value});
    }
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
       {cartItems.length !== 0 &&(
         <div>
            <div className='cart'>
            <div className='total'>
                <div>
                    Total: {" "}
                    {formatCurrency(
                        cartItems.reduce((a,c) => a + c.price * c.count, 0)
                    )}
                </div>
                <button className='button primary' onClick={() => this.setState({showCheckOut: true})}>Proceed</button>
            </div>
        </div>
        {this.state.showCheckOut && (
                <div className='cart'>
                    <form onSubmit={this.createOrder}>
                        <ul className='form-container'>
                            <li>
                                <label>Email</label>
                                <input type='email'
                                    name="email"
                                    required
                                    onChange={this.hnadleInput}
                                ></input>
                            </li>
                            <li>
                                <label>Name</label>
                                <input type='text'
                                    name="name"
                                    required
                                    onChange={this.hnadleInput}
                                ></input>
                            </li>
                            <li>
                                <label>Address</label>
                                <input type='address'
                                    name='address'
                                    required
                                    onChange={this.hnadleInput}
                                ></input>
                            </li>
                        </ul>
                    </form>
                </div>
            )}
            </div>
        )}
      </div>
      </div>
    )
  }
}

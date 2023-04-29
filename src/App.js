import React from 'react';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "", 
    };
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href='/'>React Shopping Cart</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>Products</div>
            <div className='sidebar'>Cart Items</div>
          </div>
        </main>
        <footer>All rights is required.</footer>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import data from './data.json';
import Products from './components/Products';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "", 
    };
  }
  sortProducts(sort){

  }
  filterProducts = (event) => {
    console.log(event.target.value);
    if(event.target.value === "") {
      this.setState({size: event.target.value,  product: data.products});
    } else {
      this.setState({
        size: event.target.value,
      products: data.products.filter(
        (product) => product.availableSizes.indexOf(event.target.value) >= 0
      ),
      });
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href='/'>React Shopping Cart</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
                <Filter 
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.color}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts} 
              ></Filter>
                <Products products={this.state.products}></Products>
            </div>
            <div className='sidebar'>Cart Items</div>
          </div>
        </main>
        <footer>All rights is required.</footer>
      </div>
    );
  }
}

export default App;

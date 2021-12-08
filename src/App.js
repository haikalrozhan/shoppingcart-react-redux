import data from "./data.json"
import React, {Component} from "react"
import Products from "./components/Products";

class App extends Component{
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: ""

    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}/>
            </div>
            <div className="sidebar">
              Cart Items
            </div>
          </div>
        </main>
        <footer>
          &copy;haikalrozhan 2022. All Rights Reserved.
        </footer>
      </div>
    );
  }
  
}

export default App;

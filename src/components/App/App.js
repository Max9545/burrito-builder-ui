import React, { Component } from 'react';
import './App.css';
import {deleteOrder, getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    getOrders()
    // .then(data => console.log(data))
    .then(data => this.setState({ orders: data.orders }))
    .catch(err => console.error('Error fetching:', err));
  }

  addNewOrder = newOrder => {
    this.setState({ orders: [...this.state.orders, newOrder]})
  }

  removeOrder = orderId => {
    deleteOrder(orderId)
    .then(() => getOrders())
    .then(data => this.setState({ orders: data.orders }))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addNewOrder={this.addNewOrder}/>
        </header>

        <Orders orders={this.state.orders} removeOrder={this.removeOrder}/>
      </main>
    );
  }
}


export default App;

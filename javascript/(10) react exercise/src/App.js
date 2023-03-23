import { Component } from 'react';
import Order from './Order.js';

export default class App extends Component {
  state = {};

  componentDidMount() {
    this.fetchOrder();
  }

  async fetchOrder() {
    try {
      let response = await fetch(`json/Orders.json`);
      let orders = await response.json();
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      if (orders) {
        const theOrders = orders.map(order => CreateOrder.fromJSON(order));
        this.setState({
          orders: theOrders
        })
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  render() {
    let component = this.state.orders ? this.state.orders.map(function (o) {
      return <Order customer={o.customer} address={o.address} items={o.items} total={o.total} />
    }) : <div>Loading Orders...</div>
    return (
      <>
        {component}
      </>);
  }
}

class CreateOrder {
  constructor(customer, address, items) {
    this.customer = customer;
    this.address = address;
    this.items = items;
  }

  static fromJSON(props) {
    const { customer, address, items } = props;

    const theItems = items.map(item => CreateItem.fromJSON(item));
    return new this(customer, address, theItems);
  }

  get total() {
    return this.items.reduce((a, c) => a + (c.price * c.quantity), 0);
  }
}

class CreateItem {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  static fromJSON(props) {
    const { item, quantity, total } = props;
    return new this(item, quantity, total / quantity);
  }
}

import React, { Component } from 'react';
import Item from './Item.js'

export default class Order extends Component {
    render() {
        const { customer, address, items, total } = this.props;
        let component = items ? items.map(function (i) {
            return <Item item={i.name} quantity={i.quantity} price={i.price} />
        }) : <div>Loading Items...</div>
        return (
            <div id="order">
                <div>Customer: {customer}</div>
                <div>Address: {address}</div>
                <div>Total: {total.toFixed(2)}</div>
                <ul>Items: {component}</ul>
            </div>
        );
    }
}
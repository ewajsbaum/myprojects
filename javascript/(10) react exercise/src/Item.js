import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        const { item, quantity, price } = this.props;
        return <li>{quantity} x {item} @ {price.toFixed(2)}/ea</li>;
    }
}
import React, { Component } from 'react';
import './rate.css';
import Calc from '../Calc';

export default class Rate extends Component {
  constructor() {
    super();

    this.state = {
      date: '',
      currencyRate: {},
    };

    this.currency = ['USD', 'RUB', 'CAD'];

    this.getRate = () => {
      fetch('https://api.exchangeratesapi.io/latest')
        .then((res) => res.json())
        .then((data) => {
          this.setState({ date: data.date });

          const result = {};

          for (let i = 0; i < this.currency.length; i += 1) {
            result[this.currency[i]] = data.rates[this.currency[i]];
          }

          this.setState({ currencyRate: result });
        });
    };

    this.createCards = (data) => Object.keys(data).map((keyName) => (
      <div className="flex-item" key={keyName}>

        <div className="currency-name">{keyName}</div>

        <div className="currency-in">
          {data[keyName]}
          *
        </div>

        <p className="currency-out">Можно купить за 1 EUR*</p>
      </div>
    ));

    this.getRate();
  }

  render() {
    const { date, currencyRate } = this.state;

    return (
      <div className="rate">

        <div className="container">

          <h3>
            Курсы валют на
            {' '}
            {date}
          </h3>

          <div className="flex-container">
            {this.createCards(currencyRate)}
          </div>

        </div>

        <Calc currency={this.currency}
              rate={this.state.currencyRate} />

      </div>
    );
  }
}

import React, { Component } from 'react';
import './Calc.css';

export default class Calc extends Component {
  constructor() {
    super();

    this.state = {
      result: 0,
    };

    this.currency = (arr) => {
      return arr.map((item) => (
        <option key={item} value={item}>{item}</option>
      ));
    };

    this.calcRate = (event) => {
      event.preventDefault();
      const elements = event.target.elements;
      const countCurrency = elements["count-currency"].value;
      const typeCurrency = elements["type-currency"].value;
      this.setState({result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2) })
    }
  }

  static getDerivedStateFromProps(props) {
    return { rate: props.rate }
  }

  render() {
    const { currency } = this.props;
    return (
      <div className="calculator">
        <h3>Калькулятор обмена</h3>
        <div className="block">
        <form onSubmit={this.calcRate}>
          <div className="calc-wish">Я хочу</div>
          <input type="number" defaultValue="150" name="count-currency" />
          <select name="type-currency">
            {this.currency(currency)}
          </select>
          <input type="submit" />
          </form>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>EUR {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

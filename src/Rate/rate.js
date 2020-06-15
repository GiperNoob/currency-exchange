import React, { Component } from 'react';
import './rate.css';

export default class Rate extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="rate">
        <div className="container">
          <h3>Курсы валют на 2020</h3>

          <div className="flex-container">

            <div className="flex-item">
              <div className="currency-name">USD</div>
              <div className="currency-in">1500</div>
              <div className="currency-out">1200</div>
            </div>

            <div className="flex-item">
              <div className="currency-name">USD</div>
              <div className="currency-in">1500</div>
              <div className="currency-out">1200</div>
            </div>

            <div className="flex-item">
              <div className="currency-name">USD</div>
              <div className="currency-in">1500</div>
              <div className="currency-out">1200</div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

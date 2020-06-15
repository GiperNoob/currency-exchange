import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Rate from '../Rate';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="site">
        <Header />

        <Rate />

        <Footer />

      </div>
    );
  }
}

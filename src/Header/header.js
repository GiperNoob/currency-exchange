import React from 'react';

import './header.css';
import Nav from '../Nav';

const header = () => (
  <header>
    <div className="main-header">
      <div className="container">
        <h1 className="site-title">Currency Exchange</h1>
      </div>
    </div>
    <div className="header-nav">
      <div className="container">
        <Nav />
      </div>
    </div>
  </header>
);

export default header;

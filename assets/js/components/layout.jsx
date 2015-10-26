import React from 'react';

import Header from 'components/layout/header.jsx'
import Menu from 'components/layout/menu.jsx'
import { Container } from 'styles/layout.js'

var Layout = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Menu />
        <div style={Container}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Layout;

import React from 'react';

import { Container } from 'styles/layout.js'

var Header = React.createClass({
  render: function() {
    return (
      <div style={Container}>
        <h1>Catfood Rocks!</h1>
      </div>
    );
  }
});

export default Header;

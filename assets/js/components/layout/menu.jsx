import React from 'react';
import { Link } from 'react-router';
import { Container } from 'styles/layout.js'

var menuStyle = Object.assign({}, Container, { textAlign: 'center' });

var Menu = React.createClass({
  render: function() {
    return (
      <div style={menuStyle}>
        <Link to={`/`}>Home</Link>
        {' | '}
        <Link to={`/new`}>Add Recipe</Link>
      </div>
    );
  }
});

export default Menu;

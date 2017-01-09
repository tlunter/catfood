import React from 'react';
import { Link } from 'react-router'

var NoMatch = React.createClass({
  render: function() {
    return (
      <div>
        Ah! This page doesn't exist! Go back to <Link to={`/`}>home</Link>!
      </div>
    );
  }
});

export default NoMatch;

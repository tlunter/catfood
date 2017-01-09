import React from 'react';

var StepDetail = React.createClass({
  getInitialState: function() {
    return { hovering: false };
  },
  setHovering: function(e) {
    this.setState({ hovering: true });
  },
  setNoHovering: function(e) {
    this.setState({ hovering: false });
  },
  renderDeleteButton: function() {
    if (this.state.hovering) {
      return (
        <button style={{float: 'right'}} onClick={this.props.delete}>
          &times;
        </button>
      );
    }
  },
  render: function() {
    var step = this.props.step;
    return (
      <li ref="step" onMouseEnter={this.setHovering} onMouseLeave={this.setNoHovering}>
        {step.description}
        {this.renderDeleteButton()}
      </li>
    );
  }
});

export default StepDetail;

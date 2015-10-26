import React from 'react';
import RecipeInterface from 'interfaces/recipe_interface.js'

var recipeInterface = new RecipeInterface();

var AddStep = React.createClass({
  propTypes: {
    recipeId: React.PropTypes.number.isRequired,
    reloadFn: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return { adding: false, text: '' };
  },
  setAdding: function(e) {
    this.setState({ adding: true, text: '' }, function() {
      this.refs.input.focus();
    });
  },
  unsetAdding: function(e) {
    this.setState({ adding: false, text: '' });
  },
  add: function(e) {
    e.preventDefault();

    recipeInterface.addRecipeStep(
      this.props.recipeId,
      { description: this.state.text },
      function() {
        this.props.reloadFn();
        this.unsetAdding();
      }.bind(this)
    );
  },
  onChange: function(e) {
    this.setState({ text: e.target.value });
  },
  render: function() {
    if (this.state.adding) {
      return (
        <form onSubmit={this.add}>
          <input
            type="text"
            ref="input"
            onChange={this.onChange}
            value={this.state.text}
            onBlur={this.unsetAdding}
          />
        </form>
      );
    }
    return <button onClick={this.setAdding}>Add Step</button>;
  }
});

export default AddStep;

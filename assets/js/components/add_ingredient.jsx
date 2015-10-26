import React from 'react';
import RecipeInterface from 'interfaces/recipe_interface.js'

var recipeInterface = new RecipeInterface();

var AddIngredient = React.createClass({
  propTypes: {
    recipeId: React.PropTypes.number.isRequired,
    reloadFn: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return { focused: false, adding: false, amount: '', thing: '' };
  },
  setAdding: function(e) {
    this.setState({ adding: true, amount: '', thing: '' }, function() {
      this.refs.amount.focus();
    });
  },
  unsetAdding: function(e) {
    this.setState({ adding: false, amount: '', thing: '' });
  },
  setFocus: function(e) {
    this.setState({ focused: true });
  },
  unsetFocus: function(e) {
    this.setState({ focused: false });
    setTimeout(function() {
      if (!this.state.focused) {
        this.unsetAdding();
      }
    }.bind(this), 1);
  },
  add: function(e) {
    e.preventDefault();

    recipeInterface.addRecipeIngredient(
      this.props.recipeId,
      { amount: this.state.amount, thing: this.state.thing },
      function() {
        this.props.reloadFn();
        this.unsetAdding();
      }.bind(this)
    );
  },
  onChange: function(field, e) {
    values = {}
    values[field] = e.target.value;
    this.setState(values);
  },
  render: function() {
    if (this.state.adding) {
      return (
        <form onSubmit={this.add} onFocus={this.setFocus} onBlur={this.unsetFocus}>
          <input
            type="text"
            ref="amount"
            onChange={this.onChange.bind(this, 'amount')}
            value={this.state.amount}
          />
          <input
            type="text"
            ref="thing"
            onChange={this.onChange.bind(this, 'thing')}
            value={this.state.thing}
          />
        </form>
      );
    }
    return <button onClick={this.setAdding}>Add Ingredient</button>;
  }
});

export default AddIngredient;

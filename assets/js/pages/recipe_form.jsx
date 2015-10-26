import React from 'react';
import RecipeInterface from 'interfaces/recipe_interface.js'
import { Link, History } from 'react-router';

var recipeInterface = new RecipeInterface();

var RecipeForm = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return { name: '', description: '', cookTime: 0 };
  },
  handleSubmit: function(event) {
    event.preventDefault();

    recipeInterface.addRecipe(
      {
        name: this.state.name,
        description: this.state.description,
        cookTime: this.state.cookTime
      },
      function(res) {
        this.context.history.pushState(null, `/`);
      }.bind(this)
    );
  },
  handleOnChange: function(field) {
    return function(field, event) {
      var updates = {};
      updates[field] = event.target.value;
      this.setState(updates);
    }.bind(this, field);
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td><input type="text" value={this.state.name} onChange={this.handleOnChange('name')} /></td>
            </tr>
            <tr>
              <td>Description:</td>
              <td><input type="text" value={this.state.description} onChange={this.handleOnChange('description')} /></td>
            </tr>
            <tr>
              <td>Cook Time:</td>
              <td><input type="text" value={this.state.cookTime} onChange={this.handleOnChange('cookTime')} /></td>
            </tr>
            <tr>
              <td colSpan="2" style={{textAlign: 'center' }}><button onClick={this.handleSubmit}>Add!</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
});

export default RecipeForm;

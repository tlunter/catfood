import React from 'react';
import { Link } from 'react-router'
import RecipeInterface from 'interfaces/recipe_interface.js'

var recipeInterface = new RecipeInterface();

var RecipeList = React.createClass({
  getInitialState: function() {
    return { recipes: [] };
  },
  componentDidMount: function() {
    this.load();
  },
  componentWillReceiveProps: function() {
    this.load();
  },
  load: function() {
    recipeInterface.getRecipes(function(recipes) {
      this.setState({ recipes: recipes });
    }.bind(this));
  },
  render: function() {
    var recipes = this.state.recipes.map(function(recipe) {
      return (
        <tr key={recipe.id}>
          <td><Link to={`/` + recipe.id}>{recipe.name}</Link></td>
          <td>{recipe.description}</td>
          <td>{recipe.cookTime}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', width: '10%' }}>Name</th>
            <th style={{ textAlign: 'left', width: '85%' }}>Description</th>
            <th style={{ textAlign: 'left', width: '5%' }}>Cooktime</th>
          </tr>
        </thead>
        <tbody>
          {recipes}
        </tbody>
      </table>
    );
  }
});

export default RecipeList;

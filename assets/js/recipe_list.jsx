import React from 'react';

var RecipeList = React.createClass({
  render: function() {
    var recipes = this.props.recipes.map(function(recipe) {
      return (
        <tr>
          <td>{recipe.name}</td><td>{recipe.description}</td><td>{recipe.cookTime}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <td>Name:</td>
            <td>Description:</td>
            <td>Cooktime:</td>
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

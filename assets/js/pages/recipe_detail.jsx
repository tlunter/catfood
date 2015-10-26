import React from 'react';
import RecipeInterface from 'interfaces/recipe_interface.js'
import AddStep from 'components/add_step.jsx'
import AddIngredient from 'components/add_ingredient.jsx'
import StepDetail from 'components/step_detail.jsx'

var recipeInterface = new RecipeInterface();

var RecipeDetail = React.createClass({
  getInitialState: function() {
    return { recipe: {}, addingStep: false, stepText: '' };
  },
  componentDidMount: function() { this.load(); },
  componentWillReceiveProps: function() { this.load(); },
  load: function() {
    recipeInterface.getRecipe(
      this.recipeId(),
      function(recipe) {
        this.setState({ recipe: recipe });
      }.bind(this)
    );
  },
  deleteStep: function(stepId) {
    return function(recipeId, stepId, e) {
      e.preventDefault();
      recipeInterface.deleteRecipeStep(
        recipeId,
        stepId,
        function() {
          this.load();
        }.bind(this)
      );
    }.bind(this, this.recipeId(), stepId);
  },
  recipeId: function() {
    return Number(this.props.params.id);
  },
  render: function() {
    var steps = (this.state.recipe.steps || []).map(function(step) {
      return <StepDetail key={step.id} step={step} delete={this.deleteStep(step.id)} />;
    }.bind(this));
    var ingredients = (this.state.recipe.ingredients || []).map(function(ingredient) {
      return <div key={ingredient.id}>{ingredient.amount} - {ingredient.thing}</div>;
    }.bind(this));
    return (
      <div>
        <h2>{this.state.recipe.name}</h2>
        <p>{this.state.recipe.description}</p>
        <h3>Ingredients</h3>
        <ul>
          {ingredients}
        </ul>
        <AddIngredient recipeId={this.recipeId()} reloadFn={this.load} />
        <h3>Steps</h3>
        <ol>
          {steps}
        </ol>
        <AddStep recipeId={this.recipeId()} reloadFn={this.load} />
      </div>
    );
  }
});

export default RecipeDetail;

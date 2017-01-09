import reqwest from 'reqwest';

var RecipeInterface = function() {};

RecipeInterface.prototype = {
  getRecipes: function(successHandler, failureHandler) {
    reqwest({
      url: '/api/recipes/',
      type: 'json',
      success: function(res) {
        successHandler(res);
      }
    });
  },
  getRecipe: function(id, successHandler, failureHandler) {
    reqwest({
      url: '/api/recipes/' + id,
      type: 'json',
      success: function(res) {
        successHandler(res);
      }
    });
  },
  addRecipe: function(data, successHandler, failureHandler) {
    reqwest({
      url: '/api/recipes/',
      method: 'post',
      type: 'json',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(res) {
        successHandler();
      }.bind(this)
    });
  },
  addRecipeStep: function(id, data, successHandler, failureHandler) {
    reqwest({
      url: '/api/recipes/' + id + '/steps/',
      method: 'post',
      type: 'json',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(res) {
        successHandler();
      }.bind(this)
    });
  },
  deleteRecipeStep: function(id, stepId, successHandler, failureHandler) {
    reqwest({
      url: '/api/recipes/' + id + '/steps/' + stepId,
      method: 'delete',
      type: 'json',
      success: function(res) {
        successHandler();
      }.bind(this)
    });
  },
  addRecipeIngredient: function(id, data, successHandler, failureHandler) {
    reqwest({
      url: '/api/recipes/' + id + '/ingredients/',
      method: 'post',
      type: 'json',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(res) {
        successHandler();
      }.bind(this)
    });
  },
  deleteRecipeIngredient: function(id, ingredientId, successHandler, failureHandler) {
    reqwest({
      url: '/api/recipes/' + id + '/ingredients/' + ingredientId,
      method: 'delete',
      type: 'json',
      success: function(res) {
        successHandler();
      }.bind(this)
    });
  }
};

export default RecipeInterface;

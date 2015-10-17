import React from 'react';
import ReactDOM from 'react-dom';
import reqwest from 'reqwest';

import RecipeList from 'recipe_list.jsx'

var Home = React.createClass({
  getInitialState: function() {
    return {
      recipes: [],
      name: "",
      description: "",
      cookTime: 0,
    };
  },
  componentDidMount: function() {
    this.load();
  },
  load: function() {
    reqwest({
      url: '/api/recipes/',
      type: 'json',
      success: function(res) {
        this.setState({ recipes: res });
      }.bind(this)
    });
  },
  handleSubmit: function(event) {
    event.preventDefault();

    reqwest({
      url: '/api/recipes/',
      method: 'post',
      type: 'json',
      data: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        cookTime: this.state.cookTime
      }),
      contentType: 'application/json',
      success: function(res) {
        this.load();
        this.setState({
          name: '',
          description: '',
          cookTime: 0
        });
      }.bind(this)
    });
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
      <div>
        <RecipeList recipes={this.state.recipes} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleOnChange('name')} />
          <input type="text" value={this.state.description} onChange={this.handleOnChange('description')} />
          <input type="text" value={this.state.cookTime} onChange={this.handleOnChange('cookTime')} />
          <button onClick={this.handleSubmit}>Add!</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<Home />, document.querySelector('#content'));

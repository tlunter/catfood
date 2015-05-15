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
      url: '/recipes/',
      type: 'json',
      success: function(res) {
        this.setState({ recipes: res });
      }.bind(this)
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();

    reqwest({
      url: '/recipes/',
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
    var recipes = this.state.recipes.map(function(recipe) {
      return (
        <tr>
          <td>{recipe.name}</td><td>{recipe.description}</td><td>{recipe.cookTime}</td>
        </tr>
      );
    });
    return (
      <form onSubmit={this.handleSubmit}>
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
          <tbody>
            <tr>
              <td>
                <input type="text" value={this.state.name} onChange={this.handleOnChange('name')} />
              </td>
              <td>
                <input type="text" value={this.state.description} onChange={this.handleOnChange('description')} />
              </td>
              <td>
                <input type="text" value={this.state.cookTime} onChange={this.handleOnChange('cookTime')} />
              </td>
              <td>
                <button onClick={this.handleSubmit}>Add!</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
});

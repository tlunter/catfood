var Home = React.createClass({
  getInitialState: function() {
    return { recipes: [] };
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
  render: function() {
    var recipes = this.state.recipes.map(function(recipe) {
      return <tr><td>{recipe.name}</td><td>{recipe.description}</td></tr>;
    });
    return (
      <table>
        <tbody>
          {recipes}
        </tbody>
      </table>
    );
  }
});

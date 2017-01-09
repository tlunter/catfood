import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router'
import { createHistory } from 'history'

import Layout from 'components/layout.jsx';
import RecipeList from 'pages/recipe_list.jsx';
import RecipeForm from 'pages/recipe_form.jsx';
import RecipeDetail from 'pages/recipe_detail.jsx';
import NoMatch from 'pages/no_match.jsx';

let history = createHistory()

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={RecipeList} />
      <Route path="new" component={RecipeForm} />
      <Route path=":id" component={RecipeDetail} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.querySelector('#content'));

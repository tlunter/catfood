var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Recipe.findAll()
    .then(function(recipes) {
      res.type('json')
        .status(200)
        .json(recipes);
    });
});

router.post('/', function(req, res) {
  models.Recipe.count({
    where: { name: req.body.name }
  }).then(function(count) {
    if (count > 0) {
      res.status(409).end();
    } else {
      models.Recipe.create({
        name: req.body.name,
        description: req.body.description,
        cookTime: req.body.cookTime
      }).then(function(recipe) {
        res.type('json')
          .status(200)
          .json(recipe);
      });
    }
  });
});

module.exports = router;

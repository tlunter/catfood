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

router.get('/:id', function(req, res) {
  models.Recipe.find({
    where: { id: req.params.id },
    include: [
      {
        model: models.Step,
        as: 'steps'
      },
      {
        model: models.Ingredient,
        as: 'ingredients'
      }
    ],
    order: '`Steps`.`order` ASC, `Recipe`.`id` ASC'
  }).then(function(recipe) {
    res.type('json')
      .status(200)
      .json(recipe);
  });
});

router.post('/:id/steps', function(req, res) {
  models.Recipe.find({
    where: { id: req.params.id }
  }).then(function(recipe) {
    var step = models.Step.create({
      description: req.body.description
    }).then(function(step) {
      recipe.addStep(step);
      res.status(200).end();
    });
  });
});

router.delete('/:id/steps/:stepId', function(req, res) {
    models.Step.destroy({
      where: {
        RecipeId: req.params.id,
        id: req.params.stepId
      }
    }).then(function() {
      res.status(200).end();
    });
});

module.exports = router;

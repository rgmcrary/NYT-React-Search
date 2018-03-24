const db = require("../models");

// Defining methods for the articlesController
module.exports = {

  // Save an article
    create: (req, res) => {
      console.log(JSON.stringify(req.body))
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Display all saved articles
    findAll: (req, res) =>  {
    db.Article
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Delete a saved article
  remove: (req, res) =>  {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};



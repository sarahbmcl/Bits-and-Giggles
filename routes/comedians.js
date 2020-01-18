var express = require('express');
var router = express.Router();

router.get('/comedians', function(req, res, next) {
    const users = req.app.locals.users;
  
    users.find().limit(10).toArray((err, recent) => {
      res.render('index', { recent } );
    });
  });

  module.exports = router;

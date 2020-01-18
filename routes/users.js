var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const flash = require('connect-flash');
const passport = require('passport');



// Configure user account profile edit
// --------------------------------------------------
router.get('/', function(req, res, next) {
  if (!req.isAuthenticated()) { 
    res.redirect('/auth/login');
  }

  const users = req.app.locals.users;
  const _id = ObjectID(req.session.passport.user);

  users.findOne({ _id }, (err, results) => {
    if (err) {
      throw err;
    }

    res.render('account', { ...results });
  });
});

// --------------------------------------------------


// Get public profile for any user
// --------------------------------------------------
router.get('/:username', (req, res, next) => {
  const users = req.app.locals.users;
  const username = req.params.username;

  users.findOne({ username }, (err, results) => {
    if (err || !results) {
      res.render('public-profile', { messages: { error: ['User not found'] } });
    }

    res.render('public-profile', { ...results, username });
  });
})
// --------------------------------------------------


// // Create edit page
// // --------------------------------------------------
// router.get('/users', (req, res, next) => {
//   const messages = req.flash();
//   res.render('account', { messages });
// });
// // --------------------------------------------------

// // Post to edit page
// // --------------------------------------------------

// router.post('/users', (req, res, next) => {
  
//   const users = req.app.locals.users;
//   const { name, photo, experience, bio } = req.body;
//   const _id = ObjectID(req.session.passport.user);

//   users.updateOne({ _id }, { $set: { name, photo, experience, bio } }, (err) => {
//     if (err) {
//       req.flash('error', 'Profile could not be updated.');
//     } else 
//     {
//       req.flash('success', 'Profile was updated successfully.');
//     };

//     res.redirect('/users');

//   });

// });
// // --------------------------------------------------

// Handle updating user profile data
// --------------------------------------------------
router.post('/', (req, res, next) => {
  
  const users = req.app.locals.users;
  const { name, photo, experience, bio } = req.body;
  const _id = ObjectID(req.session.passport.user);

  if (!req.isAuthenticated()) {
    res.redirect('/auth/login');
  }

  users.updateOne({ _id }, { $set: { name, photo, experience, bio } }, (err) => {
    if (err) {
      throw err;
    };
    
    // res.redirect('/users');
  });
});

module.exports = router;

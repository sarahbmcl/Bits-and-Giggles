// 'use strict';
// import React, { useState, useEffect, useContext } from "react";

var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://DannyMac:password1@ds011830.mlab.com:11830/heroku_pcx2vsx4", {
  useNewUrlParser: true,
});


// Create custom homepage
// --------------------------------------------------
router.get('/', function(req, res, next) {
  const users = req.app.locals.users;

  users.find().limit(11).toArray((err, recent) => {
    res.render('index', { recent } );
  });
});


module.exports = router;

const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
     
      res.render('home');
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });


  router.get('/login', async (req, res) => {
    try {
     
      res.render('login');
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

  router.get('/sign-up', async (req, res) => {
    try {
     
      res.render('sign-up');
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

  module.exports = router;
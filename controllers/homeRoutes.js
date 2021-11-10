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

  module.exports = router;
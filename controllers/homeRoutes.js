const router = require('express').Router();
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
     
      res.render('landingpage');
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

  router.get('/home', async (req, res) => {
  
     try {
  
    //   // Find the logged in user based on the session ID
    //   const userData = await Workout.findAll({
    //     where: {
    //       user_id: req.session.user_id 
    //     }
    //   });
  
      // Serialize data so the template can read it
      // const workouts = userData.map((workout) => workout.get({ plain: true }));
  
       res.render('home'); 
      //   workouts, 
      //   logged_in: req.session.logged_in 
      // });


     } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});



 

  module.exports = router;
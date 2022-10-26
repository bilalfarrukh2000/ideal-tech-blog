const router = require('express').Router();
const { Post, User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('home');
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/posts', withAuth, async (req, res) => {

     //Get current username
     try {
     const userData = await User.findOne({ where: { id: req.session.user_id } });
     const userName=userData.dataValues.name;

 
     const data = await Post.findAll({})
 
     //Logic for sorting out the data
 
 
     res.render('posts', {
       array: data,
       logged_in: true
     });
    }

    catch (err) {
      res.render('login');
    }
 
});


module.exports = router;

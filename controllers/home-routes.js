// Create an instance of a Express.js router
const router = require('express').Router();

// Import the connection to the database
const sequelize = require('../config/connection');

// Import all of the models
const { Post, User, Comment, Vote } = require('../models');

// Get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    // Return post data from the database with the following attributes
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],

    // Include associated comment and user data from the database and return it with the following attributes
    include: [
      // Include associated comment data from the database and return it with the following attributes
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        
        // Include associated user data from the database and return it with the username attribute
        include: {
          model: User,
          attributes: ['username']
        }
      },

      // Include associated user data from the database and return it with the username attribute
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      // Render the post data from the database onto the homepage
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Find and return post data from the database with the provided ID
router.get('/post/:id', (req, res) => {
  Post.findOne({
    // Find post data from the database with the provided ID and return it with the following attributes
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],

    // Include associated comment and user data from the database and return it with the following attributes
    include: [
      // Include associated comment data from the database and return it with the following attributes
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        
        // Include associated user data from the database and return it with the username attribute
        include: {
          model: User,
          attributes: ['username']
        }
      },

      // Include associated user data from the database and return it with the username attribute
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      // If the requested post data does not exist, repsond with the 404 error message
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // Rend the requested post data
      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Render login page if user session data does not exist or the user is not logged  in
router.get('/login', (req, res) => {
  // Check to see whether or not user session data exists and is logged in
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  // Respond with the login page
  res.render('login');
});

// Export router
module.exports = router;

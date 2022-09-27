// Create an instance of the Express.js router
const router = require('express').Router();

// Import the connection to the database
const sequelize = require('../config/connection');

// Import all of the models
const { Post, User, Comment, Vote } = require('../models');

// Import the authentication function
const withAuth = require('../utils/auth');

// Find and return all post data for dashboard from the database
router.get('/', withAuth, (req, res) => {
  // Log the session data to the console
  console.log(req.session);
  console.log('======================');
  Post.findAll({
    // Find all post data associated with a provided user from the database with the following attributes
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],

    // Include associated comment and user data from the database with the following attributes
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],

        // Include associated user data from the database with the username attribute
        include: {
          model: User,
          attributes: ['username']
        }
      },

      // Include associated user data from the database with the username attribute
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      // Display post data from the database on the dashboard
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Find and return post data with the requested ID from the database
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    // Find post data and return it with the following attributes
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
      // Render the post data to be edited
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      // Respond with a 500 error
      res.status(500).json(err);
    });
});

// Export router
module.exports = router;

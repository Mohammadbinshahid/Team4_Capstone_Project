// Create an instance of an Express.js router
const router = require('express').Router();

// Import the connection to the database
const sequelize = require('../../config/connection');

// Import all of the models
const { Post, User, Comment, Vote } = require('../../models');

// Import the authentication function
const withAuth = require('../../utils/auth');

// Find and return all post data from the database
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    // Return post data with the following attributes
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],

    // Include associated comment and user data from the database
    include: [
      // Include comment data with associated users from the database and return it with the following attributes
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
    .then(dbPostData => 
      // Respond with all of the requested post data
      res.json(dbPostData))
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Find and return a post from the database with the provided ID
router.get('/:id', (req, res) => {
  Post.findOne({
    // Find data with the provided ID
    where: {
      id: req.params.id
    },

    // Return post data from the database with the following attributes
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],

    // Include associated comment and user data from the database
    include: [
      // Include associated comment data and return it with the following attributes
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
      // If no post with the provided ID is found, return a 404 error message
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // Respond with the requested post data
      res.json(dbPostData);
    })
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new post in the database and return it
router.post('/', withAuth, (req, res) => {
  // Expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Post.create({
    // Create a post with the provided title and post URL that is associated with a user
    title: req.body.title,
    post_url: req.body.post_url,
    user_id: req.session.user_id
  })
    .then(dbPostData => 
      // Respond with the posted post data
      res.json(dbPostData))
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Update a post in the database if a post is upvoted
router.put('/upvote', withAuth, (req, res) => {
  // Custom static method created in models/Post.js
  Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
    .then(updatedVoteData => 
      // Respond with the updated post data's ID
      res.json(updatedVoteData))
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Update post data in the database if a post's title is changed
router.put('/:id', withAuth, (req, res) => {
  Post.update(
    // Updated post title
    {
      title: req.body.title,
      post_url: req.body.post_url
    },

    // Find data with the provided ID
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      // If no post with the provided ID is found, return a 404 error message
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // Respond with the updated post data's ID
      res.json(dbPostData);
    })
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a post in the database with the provided ID
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    // Find data with the provided ID
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      // If no post with the provided ID is found, return a 404 error message
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // Respond with the requested category data
      res.json(dbPostData);
    })
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Export router
module.exports = router;

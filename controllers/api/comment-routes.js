// Create an instance of an Express.js router
const router = require('express').Router();

// Import the Comment model
const { Comment } = require('../../models');

// Import the authentication function
const withAuth = require('../../utils/auth');

// Find and return all comment data in the database
router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => 
      // Respond with all of the comment data
      res.json(dbCommentData))
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new comment in the database and return it
router.post('/', withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  Comment.create({
    // Create a comment that is associated with a user and a post
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => 
      // Respond with the posted comment data
      res.json(dbCommentData))
    .catch(err => {
      // Log the error to the console and respond with a 400 error
      console.log(err);
      res.status(400).json(err);
    });
});

// Delete a comment in the database with the provided ID
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    // Find data with the provided ID
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      // If no comment data with the provided ID is found, return a 404 error message
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }

      // Respond with the deleted comment data's ID
      res.json(dbCommentData);
    })
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Export the router
module.exports = router;

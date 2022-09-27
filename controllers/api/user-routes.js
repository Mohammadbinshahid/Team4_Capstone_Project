// Create an instance of an Express.js router
const router = require('express').Router();

// Import all of the models
const { User, Post, Comment, Vote } = require('../../models');

// Find and return all user data from the database
router.get('/', (req, res) => {
  User.findAll({
    // Return user data without password data
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => 
      // Respond with all of the user data
      res.json(dbUserData))
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Find and return user data with the requested ID from the database
router.get('/:id', (req, res) => {
  User.findOne({
    // Find user data with the requested user ID and exclude the password attribute
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },

    // Include associated post and comment data from the database
    include: [
      // Include associated post data from the database and return it with the following attributes
      {
        model: Post,
        attributes: ['id', 'title', 'post_url', 'created_at']
      },

      // Include associated comment data from the database and return it with the following attributes
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'created_at'],

        // Include associated post data from the database and return it with the following attributes
        include: {
          model: Post,
          attributes: ['title']
        }
      },

      // Include associated post data from the database and return it with the following attributes
      {
        model: Post,
        attributes: ['title'],
        through: Vote,
        as: 'voted_posts'
      }
    ]
  })
    .then(dbUserData => {
      // If the requested user data is not found, respond with a 404 error
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }

      // Respond with the requested user data
      res.json(dbUserData);
    })
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a new user in the database and return it
router.post('/', (req, res) => {
  // Expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    // Create a user with the username, email, and password data
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      // Save the user's session data
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        // Respond with the posted user data
        res.json(dbUserData);
      });
    })
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Create session data for a valid user
router.post('/login', (req, res) => {
  // Expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    // Find user data with the requested email
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    // If the requested user data is not found, respond with a 400 error
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    // Check to see whether or not the user's password is valid
    const validPassword = dbUserData.checkPassword(req.body.password);

    // If the user's password is invalid, respond with a 400 error
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    // Save the user's session data
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      // Respond with a logged in message
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

// Destroy the current user's session if logging out
router.post('/logout', (req, res) => {
  // Check to see if a user is logged in
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// Create a new user in the database and return it
router.put('/:id', (req, res) => {
  // Expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // Pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    // Find user data with the provided ID
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      // If the requested user data does not exist, respond with a 404 error
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }

      // Respond with the updated user data
      res.json(dbUserData);
    })
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    // Find user data with the provided ID
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      // If the requested user data cannot be found, respond with a 404 error
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }

      // Respond with the deleted user data's ID
      res.json(dbUserData);
    })
    .catch(err => {
      // Log the error to the console and respond with a 500 error
      console.log(err);
      res.status(500).json(err);
    });
});

// Export router
module.exports = router;

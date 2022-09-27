// Define a handler function for authenticating a user's session
const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

// Export the authentication function
module.exports = withAuth;

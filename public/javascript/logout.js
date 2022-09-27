// Define a handler function for logging out
async function logout() {
  // Send logout request to a users API endpoint
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  // Redirect to the home page
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

// Add an event listener to the logout button
document.querySelector('#logout').addEventListener('click', logout);

// Define a handler function for handling forms
async function newFormHandler(event) {
  event.preventDefault();

  // Retrieve the form's content
  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('textarea[name="post-url"]').value;

  // Send the form's content to a post API endpoint
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Redirect back to the dashboard
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

// Add an event handler for creating a new post via a form
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

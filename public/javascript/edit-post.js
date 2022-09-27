// Define handler function for editing a form
async function editFormHandler(event) {
  event.preventDefault();

  // Retrieve the form's content
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_url = document.querySelector('textarea[name="post-url"]').value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // Send the form's content to a post API endpoint
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
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
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

// Add an event listener to the edit post form
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

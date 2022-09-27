// Define a handler function for deleting a post
async function deleteFormHandler(event) {
  event.preventDefault();

  // Find the ID of the post to delete
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // Send the delete request with the provided ID to a posts API endpoint
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  // Redirect back to the dashboard
  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

// Add an event listener to the delete button
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

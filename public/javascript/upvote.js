// Define a handler function for upvoting a post
async function upvoteClickHandler(event) {
  event.preventDefault();

  // Retrieve the ID of the post
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // Send a request to a posts API endpoint
  const response = await fetch('/api/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Reload the page
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

// Add an event listener to the upvote button
document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);

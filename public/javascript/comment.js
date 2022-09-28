// Define a handler function for comment forms
async function commentFormHandler(event) {
  event.preventDefault();

  // Retrieve the form's content
  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // Send the form's content to a comments API endpoint if the comment body is not empty
  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Reload the page once the comment is submitted
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

// Add an event listener for the comment form
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

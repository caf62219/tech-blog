

const createCommentButton = document.querySelector('.comment-form');

const createComment = async (event) => {
  event.preventDefault();
  const commentForm = document.getElementById('comment-form')
  const comment = document.querySelector('#comment-value').value;
  if (comment ) {
    try {
      console.log(commentForm.dataset.id);
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ 
          comment, 
          blogpost_id: commentForm.dataset.id 
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add comment');
      }
    } catch (err) {
    console.log(err);
  }
}}
;


createCommentButton.addEventListener('submit', createComment);


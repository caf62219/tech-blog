

const createCommentButton = document.querySelector('.comment-form');

const createComment = async () => {
  const comment = document.querySelector('#comment-value').value;
  if (comment ) {
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/api/blogpost');
      } else {
        alert('Failed to add comment');
      }
    } catch (err) {
    console.log(error);
    res.status(400).json(err);
  }
}}
;


createCommentButton.addEventListener('submit', createComment);


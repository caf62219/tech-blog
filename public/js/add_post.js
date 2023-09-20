

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blogpost-title').value.trim();
   const content = document.querySelector('#blogpost-content').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/blogpost`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create Blog Post');
      }
    }
  };
  

  
  document
    .querySelector('.blogpost-form')
    .addEventListener('submit', newFormHandler);
  
 
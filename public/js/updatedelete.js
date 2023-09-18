const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#update-title').value.trim();
   const content = document.querySelector('#update-content').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/blogpost`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update Blog Post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.update-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blogpost-list')
    .addEventListener('click', delButtonHandler);
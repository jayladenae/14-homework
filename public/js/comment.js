const newFormHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#comment-text').value.trim()
    const project_id = document.querySelector('#post-id').value.trim();

    if (text) {
        const response = await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({ project_id, text}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create comment');
        }
    }
};

//event listener for comments
document.querySelector('#comment-post').addEventListener('submit', newFormHandler);
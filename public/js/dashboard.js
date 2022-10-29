async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelectorAll('#post-title').value;
    const description = document.querySelectorAll('#post-description').value;
    const pay = document.querySelectorAll('post-pay').value;
    const date = document.querySelectorAll('#post-date').value;

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];    

    const res = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title, description, pay, date}),
        headers: {
            "Content-Type": "application/json"
        },
    });
    if (res.ok) {
        document.location.replace(`/api/post/${id}`);
    } else {
        alert("Failed to create post!");
    }
};

document.querySelector('.newFormHandler').addEventListener('submit', newFormHandler);
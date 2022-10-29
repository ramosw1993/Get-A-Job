async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelectorAll('#post-title').value;
    const description = document.querySelectorAll('#post-description').value;
    const pay = document.querySelectorAll('post-pay').value;
    const date = document.querySelectorAll('#post-date').value; 

    const res = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({title, description, pay, date}),
        headers: {
            "Content-Type": "application/json"
        },
    });
    if (res.ok) {
        document.location.replace(`/dashboard`);
    } else {
        alert("Failed to create post!");
    }
};

document.querySelector('.newFormHandler').addEventListener('submit', newFormHandler);
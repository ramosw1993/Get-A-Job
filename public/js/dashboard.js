async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const description = document.querySelector('#post-description').value;
    const pay = document.querySelector('#post-pay').value;

    if (title && description && pay) {
    const res = await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({title, description, pay}),
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
};

document
.querySelector('.new-post')
.addEventListener('submit', newFormHandler);
async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelectorAll('input[name="post-title"]').value;
    const description = document.querySelectorAll('input[name="post-title"]').value;
    const pay = document.querySelectorAll('input[name="post-pay"]').value;
    const date = document.querySelectorAll('input[name="post-date"]').value;

    const res = await fetch(`/api/dashboard/`, {
        method: "POST",
        body: JSON.stringify({title, description, pay, date}),
        headers: {
            "Content-Type": "application/json"
        },
    });
    if (res.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Failed to create post!");
    }
};

document
.querySelector(".new-post")
.addEventListener("submit", newFormHandler);
//creating a new post, take input from form and put into new post
async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#post-title").value;
  const description = document.querySelector("#post-description").value;
  const pay = document.querySelector("#post-pay").value;
  const city = document.querySelector("#post-city").value;

  if (title && description && pay) {
    const res = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({ title, description, pay, city }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert("Failed to create post!");
    }
  }
}

document.querySelector(".new-post").addEventListener("submit", newFormHandler);

//taking input from comment box and sending to handlers
const commentHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector(".new-comment-form").dataset.postid;
  const comment_text = document.querySelector("#comment-desc").value.trim();
  console.log(post_id);
  console.log(comment_text);

  if (comment_text) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({ post_id, comment_text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", commentHandler);

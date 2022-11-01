//
async function deletePost(event) {
  event.preventDefault();
  const res = await fetch(`/api/post/${event.target.getAttribute("id")}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to delete!");
  }
}

//on click do function
document.querySelectorAll(".delete").addEventListener("click", deletePost);

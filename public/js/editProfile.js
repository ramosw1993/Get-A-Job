function openMenu(event) {
  event.preventDefault();

  const formHolder = document.getElementById("formHolder");
  const jobInput = document.createElement("input");

  jobInput.setAttribute("class", "form-control");
  jobInput.setAttribute("type", "text");
  jobInput.setAttribute("placeholder", "Job Input");
  jobInput.setAttribute("id", "jobInput");

  const imgInput = document.createElement("input");

  imgInput.setAttribute("class", "form-control");
  imgInput.setAttribute("type", "text");
  imgInput.setAttribute("placeholder", "Image Link Input");
  imgInput.setAttribute("id", "imgInput");

  const submitBtn = document.createElement("button");

  submitBtn.setAttribute("id", "submitBtn");
  submitBtn.innerText = "Submit";

  formHolder.appendChild(jobInput);
  formHolder.appendChild(imgInput);
  formHolder.appendChild(submitBtn);

  document.querySelector("#submitBtn").addEventListener("click", editProfile);
}

async function editProfile(event) {
  event.preventDefault();

  const current_job = document.getElementById("jobInput").value.trim();
  const profile_pic = document.getElementById("imgInput").value.trim();

  const res = await fetch(`/api/users/edit/${userId}`, {
    method: "POST",
    body: JSON.stringify({ currentJob, profilePic }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to update!");
  }
}

document.querySelector("#editMenu").addEventListener("click", openMenu);

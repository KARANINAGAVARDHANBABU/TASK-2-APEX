document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const messageBox = document.getElementById("formMessage");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    messageBox.textContent = "All fields are required.";
    messageBox.style.color = "red";
  } else if (!emailRegex.test(email)) {
    messageBox.textContent = "Please enter a valid email.";
    messageBox.style.color = "red";
  } else {
    messageBox.textContent = "Form submitted successfully!";
    messageBox.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.className = "complete";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(taskSpan);
  li.appendChild(actions);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
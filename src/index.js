document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("new-task-description");
    const description = input.value;
    input.value = "";
    
    const item = document.createElement("li");
    item.innerText = description;
    document.getElementById("tasks").appendChild(item);

    const list = document.getElementById("tasks");
    list.appendChild(item);
    });
  });


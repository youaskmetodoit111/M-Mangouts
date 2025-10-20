window.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("viewerName");
  const title = localStorage.getItem("viewerTitle");
  const description = localStorage.getItem("viewerDescription");

  if (!name || !title || !description) {
    window.location.href = "index.html";
  } else {
    document.getElementById("user-info").innerHTML =
      `<strong>${name}</strong> — ${title}<br><em>${description}</em>`;
  }
});
document.getElementById("entry-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  if (name && title && description) {
    // Store viewer glyph in localStorage
    localStorage.setItem("viewerName", name);
    localStorage.setItem("viewerTitle", title);
    localStorage.setItem("viewerDescription", description);

    // Redirect to chat page
    window.location.href = "chat.html";
window.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("viewerName");
  const title = localStorage.getItem("viewerTitle");
  const description = localStorage.getItem("viewerDescription");

  if (name && title && description) {
    document.getElementById("user-info").innerHTML =
      `<strong>${name}</strong> — ${title}<br><em>${description}</em>`;
  } else {
    // If no glyph found, redirect back to entry
    window.location.href = "index.html";
  }
});
  }
});

// Chat logic: send message
document.getElementById("send-button").addEventListener("click", function() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();
  const chatBox = document.getElementById("chat-box");

  if (message) {
    // Display message locally (WebSocket will come next)
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    input.value = "";
  }
});

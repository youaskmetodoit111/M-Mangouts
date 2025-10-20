// server.js
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
  socket.on('message', message => {
    // Broadcast to all connected clients
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
        const socket = new WebSocket("ws://localhost:8080");

// Receive messages
socket.onmessage = function(event) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("p");
  messageElement.textContent = event.data;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
};

// Send messages
document.getElementById("send-button").addEventListener("click", function() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();

  if (message) {
    socket.send(message); // Broadcast via WebSocket
    input.value = "";
  }
});
const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen(8080, () => console.log("Mangouts shrine on port 8080"));

      }
    });
  });
});

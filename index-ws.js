const express = require("express");
const server = require("http").createServer();
const app = express();

app.get("/", function(req, res) {
  res.sendFile("index.html", { root: __dirname });
});

server.on("request", app);
server.listen(3000, function() {
  console.log("server started on port 3000");
});

/** Begin Websockets */
const WebSocketServer = require("ws").Server;

const wss = new WebSocketServer({ server: server });

wss.on("connection", function connection(ws) {
  const Numclients = wss.clients.size;
  console.log("clients connected", Numclients);

  wss.broadcast(`current visitors : ${Numclients}`);

  if (ws.readyState === ws.OPEN) {
    ws.send("welcome to my server ");
  }

  ws.on("close", function() {
    wss.broadcast(`current visitors : ${Numclients}`);
    console.log("a client has disconnected ");
  });
});

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};

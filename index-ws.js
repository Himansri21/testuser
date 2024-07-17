const express = require("express");
const server = require("http").createServer();
const app = express();

app.get("/", function(req, res) {
  res.sendFile("testapp/public/index.html", { root: __dirname });
});

server.on("request", app);
server.listen(3000, function() {
  console.log("server started on port 3000");
});

process.on("SIGINT", () => {
  console.log("sigint");
  wss.clients.forEach(function each(client) {
    client.close();
  });
  server.close(() => {
    shutdownDB();
  });
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

  db.run(`INSERT INTO visitors (count, time)
  VALUES(${Numclients}, datetime('now'))
  `);

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

/** End Websockets */
/** Begin database */

const sqlite = require("sqlite3");
const db = new sqlite.Database(":memory:");
db.serialize(() => {
  db.run(`
    CREATE TABLE visitors (
        count INTEGER,
        time TEXT
    )
    `);
});

function getCounts() {
  db.each("SELECT * FROM visitors", (err, row) => {
    console.log(row);
  });
}

function shutdownDB() {
  getCounts();
  console.log("shutting down db");
  db.close();
}

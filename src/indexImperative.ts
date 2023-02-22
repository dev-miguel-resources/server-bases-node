import http from "http";

const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    if (request.url === "/user/description") {
      response.writeHead(200, { "content-type": "text/plain" });
      response.write("User: Jose German");
      response.end();
    } else if (request.url === "/user/list") {
      response.writeHead(200, { "content-type": "application/json" });
      response.write(
        JSON.stringify([
          { username: "jvillagran", password: "jvillagran123" },
          { username: "moleaga", password: "moleaga123" },
        ])
      );
      response.end();
    } else if (request.url === "/user/detail") {
      response.writeHead(200, { "content-type": "application/json" });
      response.write(
        JSON.stringify({ username: "jvillagran", password: "jvillagran123" })
      );
      response.end();
    } else {
      response.writeHead(404, { "content-type": "text/plain" });
      response.end("Path not found");
    }
  }
);

server.listen(3000, () => console.log("Server is listening on port: 3000"));

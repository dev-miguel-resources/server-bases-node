import http from "http";

// interfaces
export default interface Route {
  path: string;
  execute: (
    request: http.IncomingMessage,
    response: http.ServerResponse
  ) => void;
}

// Types
/*type Route = {
  path: string,
  execute: (
    request: http.IncomingMessage,
    response: http.ServerResponse
  ) => void
}

type RouteOtherProps = {
    name: string,
    lastname: string,
}

type RouteConjugation = {
    route: Route,
    routesOtherProps: RouteOtherProps
}*/

type Routes = Route[]

const routes: Routes = [
  {
    path: "/user/description",
    execute(request: http.IncomingMessage, response: http.ServerResponse) {
      response.writeHead(200, { "content-type": "text/plain" });
      response.write("User: Mauricio Oleaga");
      response.end();
    },
  },
  {
    path: "/user/list",
    execute(request: http.IncomingMessage, response: http.ServerResponse) {
      response.writeHead(200, { "content-type": "application/json" });
      response.write(
        JSON.stringify([
          { username: "jvillagran", password: "jvillagran123" },
          { username: "moleaga", password: "moleaga123" },
        ])
      );
      response.end();
    },
  },
  {
    path: "/user/detail",
    execute(request: http.IncomingMessage, response: http.ServerResponse) {
      response.writeHead(200, { "content-type": "application/json" });
      response.write(
        JSON.stringify({ username: "jvillagran", password: "jvillagran123" })
      );
      response.end();
    },
  },
];

export const getRoute = (path: string): Route | undefined =>
  routes.find((route: Route) => route.path === path);

export const exceptionNotFound = (
  request: http.IncomingMessage,
  response: http.ServerResponse
): void => {
  response.writeHead(404, { "content-type": "text/plain" });
  response.end("Path not found");
};

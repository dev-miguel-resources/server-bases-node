import http from "http";
import { IncomingMessage, ServerResponse } from "http";

export abstract class Bootstrap {
  // design pattern: facade: https://refactoring.guru/design-patterns/facade
  abstract inicialize(): Promise<string | Error>;
}

export default class extends Bootstrap {
  constructor(
    private readonly requestListener: (
      req: IncomingMessage,
      res: ServerResponse
    ) => void
  ) {
    super();
  }

  inicialize() {
    return new Promise<string | Error>((resolve, reject) => {
      const server = http.createServer(this.requestListener);

      server
        .listen(3002)
        .on("listening", () => {
          resolve("Promise resolved successfully");
          console.log("listening on port: 3002");
        })
        .on("error", (error) => {
          reject(error);
          console.log(error);
        });
    });
  }
}

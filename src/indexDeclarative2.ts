import ServerBootstrap, { Bootstrap } from "./bootstrap/server.bootstrap";
import Application from "./app";

const serverBootstrap: Bootstrap = new ServerBootstrap(
  Application.requestListener
);

// forma 1
const start = async () => {
  try {
    const resultServer = await serverBootstrap.inicialize();
    console.log(resultServer);
  } catch (error) {
    console.error(error);
  }
};

start();

// forma 2
/*serverBootstrap
    .inicialize()
    .then((message) => console.log(message))
    .catch((error) => console.error(error))*/

// forma 3: función anónima autoinvocada
/*;(async () => {
    try {
        const resultServer = await serverBootstrap.inicialize()
        console.log(resultServer)
    } catch (error) {
        console.error(error)
    }
})()*/

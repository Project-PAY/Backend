import * as Hapi from "hapi";
import Router from "../router";

const init = async () => {
  
  const server: Hapi.Server = new Hapi.Server({
    host: 'localhost',
    port: 8000
  });

  await server.start();
  console.log(`PAY Server is Running on ${server.info.port} port`)

  Router(server);
}

init();
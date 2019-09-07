let Hapi = require('hapi');

let server = new Hapi.Server({
  host: 'localhost',
  port: 8000
});

server.start(() => {
  console.log(`PAY server is running in ${server.info.uri}:${server.info.port}`)
})
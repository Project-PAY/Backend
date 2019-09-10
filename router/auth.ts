import Bell from '@hapi/bell';

const url = "/auth";

const auth = async (server) => {

  await server.register(Bell);

  

  server.route({
    method: ['POST'],
    path: `${url}/login`,
    handler(request, h) {
      return '로그인'
    }
  })
}

export default auth;
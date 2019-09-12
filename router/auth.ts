import Bell from '@hapi/bell';

const url = "/auth";

interface payload {
  id : string,
  password : string,
}

const auth = (server) => {

  server.route({
    method: ['POST'],
    path: `${url}/login`,
    handler: function(request, h) {

      const payload : payload = request.payload;

      if(payload["id"] === undefined || payload["password"]) {
      }

    },
    options: {
        response: {
          messange : '로그인'
        }
    }
  })

  server.route({
    method: ['POST'],
    path: `${url}/signup`,
    handler(request, h) {
      return '회원가입'
    }
  })

  server.route({
    method: ['POST'],
    path: `${url}/refresh`,
    handler(request, h) {
      return '리프레시 토큰'
    }
  })
}

export default auth;
import auth from './auth';

const Router = (server) => {
  auth(server);
};

export default Router;
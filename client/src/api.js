import rootApi from './rootApi';

export class UserApi {
  // eslint-disable-next-line
  constructor(rootApi) {
    this.api = rootApi;
  }
  getApi = (route) => {
    return this.api
      .get(route, {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(res => res.json());
  };
}

export default new UserApi(rootApi);
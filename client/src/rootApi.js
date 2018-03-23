class Api {
  static request(url, options) {
    return fetch(url, options);
  }
  static get(url, options) {
    return this.request(url, {
      method: 'GET',
      ...options
    });
  }
  static delete(url, options) {
    return this.request(url, {
      method: 'DELETE',
      ...options
    });
  }
  static patch(url, options) {
    return this.request(url, {
      method: 'PATCH',
      ...options
    });
  }
  static post(url, options) {
    return this.request(url, {
      method: 'POST',
      ...options
    });
  }
  static put(url, options) {
    return this.request(url, {
      method: 'PUT',
      ...options
    });
  }
}

export default Api;
class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    /*this._mode = options.mode;*/
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      /*mode: this._mode,*/
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
      })
  })
    .then((res) => {
      return this.getResponseData(res);
  })
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      mode: this._mode,
      body: JSON.stringify({
        "email": email,
        "password": password,
      })
    })
    .then((res) => {
      console.log(res);
      return this.getResponseData(res);
    })
    .then((data) => {
      console.log(data.token);
      return data;
      /*localStorage.setItem('token', data.token);
      /*return this.getResponseData(data);*/
    })
  }
  
  getContent(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      mode: this._mode,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => res.json())
    .then(data => data)
  }

  getResponseData(res) {
    if (res.ok) {
        return res.json();
    }
   return Promise.reject(new Error(`Ошибка: ${res.status}`));
}
}

const auth = new Auth({
  baseUrl: 'https://apmovies-explorer.olboris.nomoredomains.icu',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  mode: 'no-cors',
});

export default auth;
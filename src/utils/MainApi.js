class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    
   getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: this._headers,
        })
            .then((res) => {
                console.log(res.data);
                return this._getResponseData(res);
            })
    }

    getUser() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers,
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }

    setUser(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            })
        })
            .then((res) => {
                return this._getResponseData(res);
            })
    }

   saveMovie(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailer: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        })

            .then((res) => {
                return this._getResponseData(res);
            })
    }

    deleteMovie(_id) {
        return fetch(`${this._baseUrl}/movies/${_id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then((res) => {
                return this._getResponseData(res);
            })

    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://apmovies-explorer.olboris.nomoredomains.icu',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
});


export default mainApi;
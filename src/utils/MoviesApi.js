class MoviesApi {
    constructor(options) {
        this._headers = options.headers;
    }

    
    getMovies() {
        return fetch('https://api.nomoreparties.co/beatfilm-movies', {
            method: 'GET',
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

const moviesApi = new MoviesApi({
    headers: {
        /*Authorization: `Bearer ${localStorage.getItem('token')}`,*/
        'Content-Type': 'application/json'
    }
});

export default moviesApi;
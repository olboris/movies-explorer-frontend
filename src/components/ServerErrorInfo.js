function ServerErrorInfo (props) {
  
    return (
      <div className={`movies-notfound ${props.isServerError ? '' : 'movies-notfound_hidden'}`}>
          <p className="movies-notfound__info">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз.</p>
      </div>
    ); 
  }
  
  export default ServerErrorInfo;
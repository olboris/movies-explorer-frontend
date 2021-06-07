import React from 'react';

function TrailerPopup(props) {

  const popupRef = React.useRef(null);
  const popupContainerRef = React.useRef(null);

  function handleOverlayClose(event) {

    if (popupRef.current && !popupContainerRef.current.contains(event.target)) {
      props.onClose();
    }
  }

  return (
    <div ref={popupRef} onClick={props.isOpen ? handleOverlayClose : undefined} className={`trailer-popup ${props.isOpen && 'trailer-popup_opened'}`} id="trailer-popup">
      <div ref={popupContainerRef} className="popup__trailer-container" id="trailer-container">
        <button onClick={props.onClose} type="button" aria-label="Закрыть" name="trailerclose-button" id="trailerclose-button" className="trailer-popup__close-button"></button>
        <figure className="popup-trailer__figure">
          <img className="popup-trailer__image" alt="Картинка" src={`${props.movie.image.url}`} />
          <figcaption className="popup-trailer__image-caption">{props.movie.nameRU}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default TrailerPopup;
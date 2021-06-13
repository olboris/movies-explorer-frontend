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
      <div ref={popupContainerRef} className="trailer-popup__video-container" id="trailer-container">
        <button onClick={props.onClose} type="button" aria-label="Закрыть" name="trailer-popup_close-button" id="trailerclose-button" className="trailer-popup__close-button"></button>
        <div className="trailer-popup__figure">
          <video autoPlay preload="false" controls className="trailer-popup__video" alt="Картинка" src={`${props.movie.trailerLink}`} />
          <p className="trailer-popup__video-caption">{props.movie.nameRU}</p>
        </div>
      </div>
    </div>
  );
}

export default TrailerPopup;
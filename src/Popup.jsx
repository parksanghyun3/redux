import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Popup = ({ show, onClose }) => {
  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="popup"
      unmountOnExit
    >
      <>
        <div className="popup">
          <div className="popup-content">
            <h2>팝업 입니다.</h2>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
        <div className="dimd"></div>
      </>
    </CSSTransition>
  );
};

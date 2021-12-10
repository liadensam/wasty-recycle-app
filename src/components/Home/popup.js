import React from "react";
import info from "./img/info-grey.svg"
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span 
        className="close-icon" 
        onClick={props.handleClose}>
          <img 
          src={info} 
          alt="info icon"
          />
          </span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;
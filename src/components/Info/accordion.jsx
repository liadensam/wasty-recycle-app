import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi'

const InfoAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  

  return (
    <div className="info-accordion--item">
      {/* //inserting the isActive state - if isActive is false, we set it to true, and if it's true, we set it to false */}
        <div 
        className="info-accordion--title" 
        onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
              {/* showing up or down icons depending on isActive state */}
                <HiChevronDown 
                className={isActive === false ? "accordion_icon" : "accordion_icon rotate"} />
        </div>
          {/* if the isActive state is true, we show the accordion content */}
          {isActive && 
          <div 
          className="info-accordion--content">
            <p 
          className="info-accordion--content--text">
            {content}
          </p>
      </div>}
    </div>
  );
};

export default InfoAccordion;
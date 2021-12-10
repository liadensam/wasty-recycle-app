import React, { useState, useRef } from "react";
import './style.scss'

import { AiOutlineArrowDown } from 'react-icons/ai'


const Faq = (props) => {
  const [setActive, setActiveState] = useState("");
    //a state for the height of the accordion 
    const [setHeight, setHeightState] = useState("0px");

    //reference for toggle animation
    const content = useRef(null);

    //for rotating icon
    const [setRotate, setRotateState] = useState("accordion_icon");

    //the toggle function, used in the button below
    //looks at the active state, and sees if it's empty, if it is empty, it's going to set that to active, and if it's active, it will set it to empty
    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        //the accordion height when it's toggled
        //looks at the set active state and check if it's active, if it is active, it sets it to 0px, if it's not it sets it to the template string
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
            );
        
        //For rotating the icon 
        //looks at the setActive state and check if it's on active, if it's set to active it's going to use the default accordion_icon class name, if it's on accordion icon it's going to add the rotate
        setRotateState(
            setActive === "active" ? "accordion_icon" : "accordion_icon rotate"
        )

    }

    return (
      <>
     
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <AiOutlineArrowDown className={`${setRotate}`} />
                <p className="accordion__title">{props.title}</p>
            </button>

            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion__content">
                <div 
                    className="accordion__text" 
                    dangerouslySetInnerHTML={{__html: props.content}} 
                />
                    
            </div>
        </div>

      </>
    )
}

export default Faq;


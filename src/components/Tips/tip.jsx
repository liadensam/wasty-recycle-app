import React, {useState} from 'react'

import './style.scss'
import { HiChevronDown } from 'react-icons/hi'
const Tip = ({name, text}) => {

  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };



  return (

    <div className="accordian">
        <div 
        className="accordian--header" 
        onClick={handleOpen}
        >
            <div
            ><b>{name}</b>
            </div>
            <div className="accordian--icon">
              <HiChevronDown 
              className={show === false ? "accordian--icon" : "accordion_icon rotate"} />
          </div>
        </div>

       {show && (
          <div 
          className={show ? "accordian--body show" : "accordian--body"}>
            <p className="accordian--body--text">{text}</p>
          </div>
        )}

     
    </div>


      

  )
}

export default Tip;


import React, {useState} from 'react'

import './style.scss'
// import arrowUp from './img/arrow-up.svg'
// import arrowDown from './img/arrow-down.svg';
import { HiChevronDown } from 'react-icons/hi'
const Tip = ({name, text}) => {

  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };



  //image rotate icon
  // <img src={arrowUp} alt="arrow menu open"/>

  //animation ease in and out
  //change color when open

  return (

    <div className="accordian">
      <div className="accordian--header" onClick={handleOpen}>
        <div><b>{name}</b></div>
        <div className="accordian--icon">
          <HiChevronDown className={show === false ? "accordion--icon" : "accordion_icon rotate"} />
        {/* {show ? <img src={arrowUp} alt="arrow menu open"/> : <img src={arrowDown} alt="arrow menu close" />} */}
        </div>
      </div>
       {show && (
          <div className={show ? "accordian--body show" : "accordian--body"}>
            <p>{text}</p>
          </div>
        )}

          {/* <div className={show ? "accordian--body show" : "accordian--body"}>
            <p>{text}</p>
          </div> */}

     
    </div>


      

  )
}

export default Tip;


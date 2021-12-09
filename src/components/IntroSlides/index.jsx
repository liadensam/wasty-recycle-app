import React, { useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import "./style.scss";
import { NavLink } from "react-router-dom";
import {imgData} from './utils/data'
import { useSwipeable } from 'react-swipeable';
// import { useDrag } from '@use-gesture/react'
// import { animated, useSpring } from '@react-spring/web'


const len = imgData.length - 1;

const IntroSlides = () => {
  const [activeIndex, setActiveIndex] = useState(0);


//   const handleDrag = () => {
//     setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
// }


  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex(activeIndex === len ? activeIndex : activeIndex + 1),
    onSwipedRight: () => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1),
    // onSwipeStart
    preventDefaultTouchmoveEvent: true,
    // trackMouse: true,
    trackTouch: true
  })




  


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);


  const redirectClass = ({isActive}) => isActive ? 'button--redirect button__active' : 'button--redirect';


  return (
    <>


  
      <main {...handlers} className="main-content">
      {/* <main> */}
        <SliderContent className="slide-content" activeIndex={activeIndex} imgData={imgData}/>
        
        {/* <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        /> */}

      </main>
      



      <footer className="footer-content">
      <button><NavLink className={redirectClass} to="/home">Skip</NavLink></button>
      <Dots
          activeIndex={activeIndex}
          imgData={imgData}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        /></footer>


        
    </>
  );
}

export default IntroSlides;



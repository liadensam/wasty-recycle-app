import React, { useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import "./style.css";
import { NavLink } from "react-router-dom";
import {imgData} from './utils/data'


// const len = imgData.length - 1;

const IntroSlides = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);

  // const handleClick = () => {
  //     setActiveIndex(activeIndex === len ? null : activeIndex + 1)
  // }

  const redirectClass = ({isActive}) => isActive ? 'button--redirect' : 'button--redirect';

  return (
    <>
    <main>
      <SliderContent activeIndex={activeIndex} imgData={imgData} />
      {/* <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      /> */}
    </main>
    <footer className="footer--intro-slides">
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
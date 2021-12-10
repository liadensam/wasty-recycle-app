import React from "react";

function SliderContent({ activeIndex, imgData }) {
  return (
    <section className="slider-container">
      {imgData.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides slide-active" : "slide-inactive"}
        >
          <img className="slide-image" src={slide.url} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <p className="slide-text">{slide.description}</p>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;

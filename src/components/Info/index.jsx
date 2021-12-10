import React from 'react';
import InfoAccordion from './accordion.jsx';
import { infoArrayData } from './utils/infoArray';
import "./style.scss"
import Scratching from "./img/Scratching.gif"
import Menu from '../../components/Menu'

const Info = () => {
  return (
    <div>
      <Menu/>
      {/* <h1>Info</h1> */}
      <img src={Scratching} alt=""/>
      <div className="info-accordion">
      {/* looping over the using the array map method, and passing the corresponding title and content to the Accordion component. */}
        {infoArrayData.map(({ title, content }) => (
          <InfoAccordion key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Info
import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import './style.scss'

import imgTapping from './img/Tapping.gif'

import {ReactComponent as Wave} from './img/wave.svg'
import Popup from './popup.js';

import info from "./img/info-grey.svg"



const Home = ({setHideMenu}) => {

  const navigate = useNavigate();
  const redirectToMap = () => {
    setHideMenu(false)
    navigate('/map')
  }

  
 

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }



	return (

    
    <>
 
		<main className="home-container">
      <img className="avatar" src={imgTapping} alt="tapping girl" />
      <div className="home-info-button">
    <input
      className="info-toggler"
      type="image"
      src={info}
      alt="info icon"
      width="18"
      height="18"
      value="info"
      onClick={togglePopup}
    />
   
    {isOpen && <Popup
      content={<>
        <p className="info-button--text">Go to the map where you can find every location with material you need to recycle. To discover more, click on the menu button.</p>
      </>}
      handleClose={togglePopup}
    />}
 </div>
      <div className="home-content">
        <h2 className="home-title">Think of what You have to dispose</h2>
          <p className="home-text">We will help you to find the right place to recycle</p>
      </div>
      
      <div className="recycle--buttons">
			<button className="button--map" onClick={redirectToMap}>go to Map</button>
      <Wave className="home--wave" />
      </div>
		</main>
   
    </>
	);
}

export default Home;
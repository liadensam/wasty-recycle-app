import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import './_home.scss'

import imgTapping from './img/Tapping.gif'

import Menu from '../../components/Menu';
import Popup from './popup.js';

import info from "./img/info-grey.svg"


const Home = () => {

  const navigate = useNavigate();
  const redirectToMap = () => {
    navigate('/map')
  }

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

	return (
    <>
    <Menu />
		  <main className="home-container">
        <img 
        className="avatar" 
        src={imgTapping} 
        alt="tapping girl" />
          <div className="home-info-button">
            <input
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
                <p className="info-button--text">
                  Select any button and it will direct you to the map where you can find every location with material you need to recycle. To discover more, click on the menu button.
                </p>
              </>}
              handleClose={togglePopup}
            />}
          </div>
          <div className="home-content">
            <h2 className="home-title">Choose categories</h2>
              <p className="home-text">
                I can help you to find the right place to recycle
              </p>
          </div>
      
          <div className="recycle--buttons">
            <button onClick={redirectToMap}>go to Map</button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
      </main>
    </>
	);
}

export default Home;
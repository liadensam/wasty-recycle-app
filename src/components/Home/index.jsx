import React from 'react';
import { useNavigate } from 'react-router';
import './style.scss'

import avatar from './img/avatar.svg'




const Home = ({setHideMenu}) => {

  const navigate = useNavigate();

  const redirectToMap = () => {
    setHideMenu(false)
    navigate('/map')
  }

  


	return (

    
    <>
 
		<main>
			<h2>Home</h2>
      <img className="avatar" src={avatar} alt="avatar" />

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
import React from 'react';
import { useNavigate } from 'react-router';
import './style.scss'

import imgTapping from './img/Tapping.gif'

import Menu from '../../components/Menu';


const Home = () => {

  const navigate = useNavigate();

  const redirectToMap = () => {

    navigate('/map')
  }


	return (
    <>
    <Menu />
		<main>
			<h2>Home</h2>
      <img className="avatar" src={imgTapping} alt="tapping girl" />
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
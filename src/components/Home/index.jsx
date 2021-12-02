import React from 'react';
import { useNavigate } from 'react-router';
import './style.css'

import avatar from './img/avatar.svg'

import Menu from '../../components/Menu';


const Home = () => {

  const navigate = useNavigate();

  const redirectToMap = () => {

    navigate('/map')
  }


	return (
    <>
    <header><Menu /></header>
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
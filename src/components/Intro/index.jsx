import React from 'react';
import { useNavigate } from 'react-router';
import './style.css'

const Intro = () => {


const navigate = useNavigate();

const handleClick = () => {

  navigate('/home')
}

  //second parameter is for replacing the history, just the last step (we cannot return back by arrow)
  // navigate('/reviews', {replace=true})
  return (
    <>
    <div className="intro">
      <h2>Intro</h2>
    </div>
    <footer><button onClick={handleClick}>Navigate to HOME</button></footer>
    </>
  );
}

export default Intro;
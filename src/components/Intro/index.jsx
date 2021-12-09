import React from 'react';
import { useNavigate } from 'react-router';
import './style.scss'

const Intro = () => {


const navigate = useNavigate();

const handleClick = () => {

  navigate('/introslides')
}

  //second parameter is for replacing the history, just the last step (we cannot return back by arrow)
  // navigate('/reviews', {replace=true})
  return (
    <>
      <div className="intro">
    </div>
    <footer><button className="button__start" onClick={handleClick}>Get started</button></footer>

    </>
  );
}

export default Intro;
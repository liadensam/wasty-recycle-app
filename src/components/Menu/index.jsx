import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Turn as Hamburger } from 'hamburger-react'

import './style.css'

const Menu = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const handleClick = () => {
    setMenuOpened(!menuOpened);
  }

  const navigate = useNavigate();

  const redirectToHome = () => {

    navigate('/home')
  }

  
  return (

    <>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#f3f4f5" fill-opacity="1" d="M0,96L60,101.3C120,107,240,117,360,149.3C480,181,600,235,720,256C840,277,960,267,1080,240C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg> */}

        <div className={menuOpened === true? "menu" : "menu menu--closed"}>
          <div className="menu--buttons" >
          <button className="menu__btn--home" onClick={redirectToHome}></button>

          <Hamburger className="menu__icon" direction="left" size={30} duration={0.4} distance="md" color="#000" rounded label="Show menu" 
                onToggle={handleClick}/>

        </div>

        <nav className="menu__items">
          {/* <NavLink to="/home">Home</NavLink> */}
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/tips">Tips</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        </div>

    </>

	);
}

export default Menu;

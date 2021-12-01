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

  const redirectToMap = () => {

    navigate('/map')
  }

  
  return (

    <>

        <div className={menuOpened === true? "menu" : "menu menu--closed"}>
          <div className="menu--buttons" >
          <button className="menu__btn--home" onClick={handleClick}></button>
          <button className="menu__btn" onClick={redirectToMap}></button>

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

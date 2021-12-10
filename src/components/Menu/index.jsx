import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router';
import { Turn as Hamburger } from 'hamburger-react'


import './style.scss'

const Menu = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  }

  // const navigate = useNavigate();
  // const redirectToHome = () => {
  //   navigate('/home')
  // }

  const classLink = ({isActive}) => isActive ? 'menu__link' : 'menu__link';

  
  return (

      <header className="menu-container">
        <div className={menuOpened === true? "menu" : "menu menu--closed"} >
          <div className="menu__buttons" >

          <Hamburger className="menu__icon" direction="left" size={30} duration={0.4} distance="md" color="#000" rounded label="Show menu" 
                toggled={menuOpened} toggle={setMenuOpened} />

          {/* <Hamburger onToggle={toggled => {
            if (toggled) {
              // open a menu
            } else {
              // close a menu
            }
          }} /> */}

            </div>

            <nav className={menuOpened === true? "menu__items" : "menu__items items--closed"} onClick={handleClick}>
              {/* <NavLink to="/home">Home</NavLink> */}
               <NavLink className={classLink} to="/info">Info</NavLink>
               <NavLink className={classLink} to="/tips">Tips</NavLink>
              <NavLink className={classLink} to="/about">About</NavLink>
              {/* <NavLink className={classLink} to="/faq">FAQ</NavLink> */}
            </nav>
         
        </div>

      

    </header>

	);
}

export default Menu;

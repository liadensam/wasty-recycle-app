import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react'


import './_menu.scss'

const Menu = () => {

  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  }


  const classLink = ({isActive}) => isActive ? 'menu__link' : 'menu__link';

  
  return (

      <header className="menu-container">
        <div className={menuOpened === true? "menu" : "menu menu--closed"} >
          <div className="menu__buttons" >

          <Hamburger 
          className="menu__icon" 
          direction="left" 
          size={30} 
          duration={0.4} 
          distance="md" 
          color="#fff" 
          rounded label="Show menu" 
          toggled={menuOpened} 
          toggle={setMenuOpened} />

            </div>

            <nav 
            className={menuOpened === true? "menu__items" : "menu__items items--closed"} onClick={handleClick}
            >
               <NavLink 
               className={classLink} 
               to="/info">Info
               </NavLink>

               <NavLink 
               className={classLink} 
               to="/tips">Tips
               </NavLink>

              <NavLink 
              className={classLink} 
              to="/about">About
              </NavLink>
    
            </nav>
         
        </div>

      

    </header>

	);
}

export default Menu;

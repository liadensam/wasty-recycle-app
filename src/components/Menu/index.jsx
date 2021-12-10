import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router';
import { Turn as Hamburger } from 'hamburger-react'
import{ReactComponent as WaveBottom} from './img/waveBottom.svg'
import{ReactComponent as WaveTop} from './img/waveTop3.svg'
import{ReactComponent as WaveMid} from './img/waveTop2.svg'
import{ReactComponent as Logo} from './img/logoMenu.svg'


import './style.scss'

const Menu = ({hideMenu}) => {

  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  }

  // const navigate = useNavigate();
  // const redirectToHome = () => {
  //   navigate('/home')
  // }

  const classLink = ({isActive}) => isActive ? 'menu--link menu--link--active' : 'menu--link';

  
  return (

      <header className={hideMenu&&"hidden"}>
          <Hamburger className="menu--icon" direction="left" size={30} duration={0.4} distance="md" color="#000" rounded label="Show menu" 
                toggled={menuOpened} toggle={setMenuOpened} />
        <div className={menuOpened === true? "menu" : "menu menu--closed"} >
          <WaveTop className="wave--menu--top" width="100vw" />
          <WaveMid className="wave--menu--mid" width="100vw" />
          <WaveBottom className="wave--menu--bottom" width="100vw" />
          <Logo className="logo--menu--bg" width="100vw" />

          <div className="menu--buttons" >
          {/* <button className="menu__btn--home" onClick={redirectToHome}></button> */}


          {/* <Hamburger onToggle={toggled => {
            if (toggled) {
              // open a menu
            } else {
              // close a menu
            }
          }} /> */}

            </div>

            <nav className={menuOpened === true? "menu--items" : "menu--items items--closed"} onClick={handleClick}>
              {/* <NavLink to="/home">Home</NavLink> */}
              <NavLink className={classLink} to="/map" onClick={handleClick}>Map</NavLink>
              <NavLink className={classLink} to="/about" onClick={handleClick}>About</NavLink>
              <NavLink className={classLink} to="/faq" onClick={handleClick}>FAQ</NavLink>
              <NavLink className={classLink} to="/tips" onClick={handleClick}>Tips</NavLink>
              <NavLink className={classLink} to="/contact" onClick={handleClick}>Contact</NavLink>
              
            </nav>
         
        </div>

      

    </header>

	);
}

export default Menu;

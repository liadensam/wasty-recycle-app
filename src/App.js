import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Map from './components/Map';
import Info from './components/Info';
import About from './components/About';
import Intro from './components/Intro';
import Tips from './components/Tips';
import Directions from './components/Directions';
import IntroSlides from './components/IntroSlides'


import './style.scss';
import { tipsArray } from './components/Tips/tipsArray';

const App = () => {

  return (
<<<<<<< HEAD

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/introslides" element={<IntroSlides />} />
            <Route path="/home" element={<Home />} />
            <Route path="/map" element={<Map/>} />
            <Route path="/about" element={<About />} />
            {/* faq - the json file needs to be mapped */}
            <Route path="/faq" element={<Faq 
            title="Question1" 
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>} 
            />
            <Route path="/tips" element={<Tips tipsArray = {tipsArray}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/directions" element={<Directions />} />
          </Routes>
      </BrowserRouter>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/introslides" element={<IntroSlides />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/tips" element={<Tips tipsArray = {tipsArray}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/directions" element={<Directions />} />
      </Routes>
    </BrowserRouter>
>>>>>>> swipe
  );
}

export default App;

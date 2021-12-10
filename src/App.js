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
  );
}

export default App;

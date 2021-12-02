import React, { useRef, useEffect, useState} from 'react';
import { useNavigate } from 'react-router';

import './style.css';
import Menu from '../../components/Menu';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import { accessToken } from 'mapbox-gl';

const token = process.env.REACT_APP_MAP_TOKEN
mapboxgl.accessToken = token


const Map = () =>{

  
  const navigate = useNavigate();
  
  const redirectToDirections = () => {
  
    navigate('/directions')
  }


  //set up app's default state

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState( -21.9265);
  const [lat, setLat] = useState(64.1420);
  const [zoom, setZoom] = useState(10.5);



  // initialising map on it's default state ^^

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/lenysebski/ckwmszx8m59xc15mwjc860feu',
      center: [lng, lat],
      zoom: zoom
    });
  });


  //storing the actual center of the map after moving

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
    <header><Menu /></header>
    <main>
    <div>
    <div className="sidebar">
      Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </div> 
      <div ref={mapContainer} className="map-container" />
    </div>
    <div className="map--buttons">
      <button></button>
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
    <button className="button--find" onClick={redirectToDirections}>Find</button>
    </>
  );
}

export default Map;
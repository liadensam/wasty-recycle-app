import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import ReactMapGL, { Marker, Popup, NavigationControl, GeolocateControl } from 'react-map-gl'
import {MdLocationPin} from 'react-icons/md'
import {MdIcecream} from 'react-icons/md'
import {MdLocalParking} from 'react-icons/md'
// import {MdLocalCafe} from 'react-icons/md'
import 'mapbox-gl/dist/mapbox-gl.css'
import ShowMarkers from './ShowMarkers';
import TrashTypes from './TrashTypes';
import BinInfo from './BinInfo';
import { FlyToInterpolator } from 'react-map-gl';

// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import Menu from '../../components/Menu';
import './style.css'
// import { accessToken } from 'mapbox-gl';

// const token = process.env.REACT_APP_MAP_TOKEN
// mapboxgl.accessToken = token


const geoJsonUrl = 'https://lukrgatt.reykjavik.is/server/rest/services/OpinGognThjonusta/Endurvinnslugamar/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson';

const places = [
	{
		id: 1,
		iconUrl: MdIcecream,
		latitude: 50.08415631476569,
		longitude: 14.423472469019359,
	},
	{
		id: 2,
		iconUrl: MdIcecream,
		latitude: 50.08140252219053,
		longitude: 14.425123690476866,
	},
	{
		id: 3,
		iconUrl: MdLocalParking,
		latitude: 50.08315119880879,
		longitude: 14.42713937555392,
	},
	{
		id: 4,
		iconUrl: MdLocalParking,
		latitude: 50.08147136893371,
		longitude: 14.427310912961879,
	},
]

const Map = () =>{

  
  const navigate = useNavigate();
  const redirectToDirections = () => {
    navigate('/directions')
  }

const [popupInfo,setPopupInfo] = useState(null)
  const [popupOpen, setPopupOpen] = useState(false)
  // const [toggleIcon, setToggleIcon] = useState(false)
  const [open, setOpen] = useState(true)
  const [bins, setBins] = useState([]);
  const [filteredBins, setFilteredBins] = useState([])
  const [filterArray,setFilterArray] = useState([])



  
  // const [dragIcon, setDragIcon] = useState({
    //   latitude: 50.08147136893371,
    //   longitude: 14.427310912961879,
    // })
    
    const [viewport, setViewport] = useState({
      latitude: 64.12914739924277,
      longitude: -21.918358129291008,
      zoom: 11,
    })
    
    // useEffect (
      //   () => {
        //     fetch("https://lukrgatt.reykjavik.is/server/rest/services/OpinGognThjonusta/Endurvinnslugamar/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json")
        //     .then(response => response.json())
        //     .then(data => {
          //       console.log(data)
          //     })
          //   },
          //   []
          // );
          
          
          const fetchBins = () => {
            fetch(geoJsonUrl)
            .then(response => response.json())
            .then(data => {
              //  setBins(data)
              
              setFilteredBins(data.features.map((bin)=>{
                const result = 
                {name:bin.properties.NAFN,
                  metal:bin.properties.MALMAR,
                  plastic:bin.properties.PLAST,
                  paper:bin.properties.PAPPIR,
                  bottles:bin.properties.FLOSKUR,
                  glass:bin.properties.GLER,
                  clothes:bin.properties.FOT,
                  geometry:bin.geometry.coordinates
                }//bin object
                
                
                return result
              }//map function 
              )//map
              
              )//set FilteredBins array
              setBins(data.features.map((bin)=>{
                const result = 
                {name:bin.properties.NAFN,
                  metal:bin.properties.MALMAR,
                  plastic:bin.properties.PLAST,
                  paper:bin.properties.PAPPIR,
                  bottles:bin.properties.FLOSKUR,
                  glass:bin.properties.GLER,
                  clothes:bin.properties.FOT,
                  geometry:bin.geometry.coordinates
                }//bin object
                
                
                return result
              }//map function 
              )//map
              
              )//set FilteredBins array
            })
            
          }
          
          
          
          useEffect(() => {
            fetchBins();
            
          }, []);
          
          const handleFilters =(event)=> {
              const {id,name,checked}=event.target
          
          
            setFilterArray((previousFilters)=>{
             return(  previousFilters.indexOf(name)>-1 ? previousFilters.filter(filter => filter!==name) : [...previousFilters, name])
            }) //setFilterArray
                    

          }//handleFilters
          
          useEffect(() => {
            if(filterArray.length) {   //if there are any filters checked
            setFilteredBins(
              bins.filter(bin=>     //filter all bin locations
                filterArray.every(material=> // by checking every filter category name
                  bin[material]>1))         // checking if the value of the property with this material name is bigger than 1 

                    //bigger than one since all the values somehow are higher than 1 and just to prove that filtering works

            )} else{setFilteredBins(bins)}    //if there are no filters chosen - return all bin locations
          }, [filterArray])


          return(
            <>
    <header><Menu /></header>
    <main>
    <ReactMapGL
    transitionDuration={1300} transitionInterpolator={new FlyToInterpolator()}
		{...viewport}
		width="100vw"
		height={400}
		onViewportChange={(nextViewport) => setViewport(nextViewport)}
    // onClick={(event) =>
    //   setDragIcon({
    //     latitude: event.lngLat[1],
    //     longitude: event.lngLat[0],
    //   })
    // }



    mapStyle={{
      version: 8,
      sources: {
         'raster-tiles': {
            type: 'raster',
            // tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
            tiles: ['https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution:
            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
         },
      },
      layers: [
         {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 22,
            // maxzoom: 18
         },
      ],
   }}
	>




  <div className="navigation">
    <NavigationControl />
    <GeolocateControl />
  </div>
    
    <Marker 
    latitude={50.0833715} 
    longitude={14.4252452} 
    offsetLeft={-25} 
    offsetTop={-50}>
      <button
      className="marker-button" 
      onClick={() => setPopupOpen(true)}>
        <MdLocationPin size={40} />
      </button>
      
    </Marker>

{/*  Rendering Filtred Markers (start with no filter)  */}


  {filteredBins ? <ShowMarkers 
            data={filteredBins}
            onClick={setPopupInfo}
            setViewport={setViewport} />: 
            <div className="map-alert">
              {`We are sorry! 
              There are no locations found`}
            </div>}
 
            {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.geometry[0]}
            latitude={popupInfo.geometry[1]}
            closeOnClick={true}
            onClose={setPopupInfo}
          >
            <BinInfo info={popupInfo} />
          </Popup>
        )}



    {/* {bins.features?.map(bin => ( 
    <Marker
    key={bin.id}
    latitude={bin.geometry.coordinates[1]}
    longitude={bin.geometry.coordinates[0]}
    offsetLeft={-15}
    offsetTop={-15}
    className={open ? "hide" : null}
      >
      <a href="https://reykjavik.is/thjonusta/hirda-urgangs" target="blank">
        <MdLocationPin color="red" size={40}/>
      </a>
    </Marker>
    
      ))} */}


    {/* <Marker 
      {...dragIcon} 
      offsetLeft={-25} 
      offsetTop={-50} 
      draggable 
      onDragEnd={(event) =>
      setDragIcon({
        latitude: event.lngLat[1],
        longitude: event.lngLat[0],
      })
    }>
    <MdLocalCafe 
    size={40} 
    style={{ pointerEvents: 'none' }} />
    </Marker> */}

    
    

    {popupOpen && <Popup
      latitude={50.0833715}
      longitude={14.4252452}
      offsetTop={-50}
      onClose={() => setPopupOpen(false)}
    >
      Czechitas
    </Popup>}



      {places
      // .filter((place) => toggleIcon === false || place.iconUrl !== MdLocalParking)
      .map((place) => (
      <Marker
        key={place.id}
        latitude={place.latitude}
        longitude={place.longitude}
        offsetLeft={-15}
        offsetTop={-15}
      >
        <place.iconUrl size={40} />
      </Marker>

  ))}
  </ReactMapGL>
  {/* <button 
    onClick={() => setToggleIcon(!toggleIcon)}
    >
    {toggleIcon ? 'show' : 'hide'} parking
  </button> */}
    {/* <button value="PAPPIR" onClick={filterBins}> filter pappir </button> */}


    <div className="map--buttons">
    <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? 'show' : 'hide'} bins
    </button>
    

      <TrashTypes handleFilters={handleFilters}/>
      <button onClick={handleFilters}></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </div>
    </main>
    <footer><button className="button--find" onClick={redirectToDirections}>Find</button></footer>

  </>

  ) 
}

  

export default Map;
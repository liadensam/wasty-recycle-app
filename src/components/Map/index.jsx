import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ReactMapGL, { FlyToInterpolator, Popup, NavigationControl, GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import ShowMarkers from './ShowMarkers';
import TrashTypes from './TrashTypes';
import BinInfo from './BinInfo';
import Menu from '../../components/Menu';
import './style.css'
// import { accessToken } from 'mapbox-gl';

// const token = process.env.REACT_APP_MAP_TOKEN
// mapboxgl.accessToken = token


const geoJsonUrl = 'https://lukrgatt.reykjavik.is/server/rest/services/OpinGognThjonusta/Endurvinnslugamar/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson';



const Map = () => {


  const navigate = useNavigate();
  const redirectToDirections = () => {
    navigate('/directions')
  }

  const [popupInfo, setPopupInfo] = useState(null)
  const [open, setOpen] = useState(true)
  const [bins, setBins] = useState([]);
  const [filteredBins, setFilteredBins] = useState([])
  const [filterArray, setFilterArray] = useState([])




  const [viewport, setViewport] = useState({
    latitude: 64.12914739924277,
    longitude: -21.918358129291008,
    zoom: 11,
  })


  const fetchBins = () => {
    fetch(geoJsonUrl)
      .then(response => response.json())
      .then(data => {
        //  setBins(data)

        setFilteredBins(data.features.map((bin) => {
          const result =
          {
            name: bin.properties.NAFN,
            metal: bin.properties.MALMAR,
            plastic: bin.properties.PLAST,
            paper: bin.properties.PAPPIR,
            bottles: bin.properties.FLOSKUR,
            glass: bin.properties.GLER,
            clothes: bin.properties.FOT,
            geometry: bin.geometry.coordinates
          }//bin object


          return result
        }//map function 
        )//map

        )//set FilteredBins array
        setBins(data.features.map((bin) => {
          const result =
          {
            name: bin.properties.NAFN,
            metal: bin.properties.MALMAR,
            plastic: bin.properties.PLAST,
            paper: bin.properties.PAPPIR,
            bottles: bin.properties.FLOSKUR,
            glass: bin.properties.GLER,
            clothes: bin.properties.FOT,
            geometry: bin.geometry.coordinates
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

  const handleFilters = (event) => {
    const { name } = event.target


    setFilterArray((previousFilters) => {
      return (previousFilters.indexOf(name) > -1 ? previousFilters.filter(filter => filter !== name) : [...previousFilters, name])
    }) //setFilterArray
  }//handleFilters



  useEffect(() => {
    if (filterArray.length) {   //if there are any filters checked
      setFilteredBins(
        bins.filter(bin =>     //filter all bin locations
          filterArray.every(material => // by checking every filter category name
            bin[material] > 1))         // checking if the value of the property with this material name is bigger than 1 

        //bigger than one since all the values somehow are higher than 1 and just to prove that filtering works

      )
    } else { setFilteredBins(bins) }    //if there are no filters chosen - return all bin locations
  }, [filterArray])


  return (
    <>
      <Menu />
      <main>
        <ReactMapGL
          transitionDuration={1300} transitionInterpolator={new FlyToInterpolator()}
          {...viewport}
          width="100vw"
          height={400}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}




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


          {/*  Rendering Filtred Markers (start with no filter)  */}


          {filteredBins ? <ShowMarkers
            data={filteredBins}
            onClick={setPopupInfo}
            setViewport={setViewport} /> :
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











        </ReactMapGL>


        <div className="map--buttons">
          <button
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? 'show' : 'hide'} bins
          </button>


          <TrashTypes handleFilters={handleFilters} />
          <button onClick={handleFilters}></button>

        </div>
      </main>
      <button className="button--find" onClick={redirectToDirections}>Find</button>

    </>

  )
}



export default Map;
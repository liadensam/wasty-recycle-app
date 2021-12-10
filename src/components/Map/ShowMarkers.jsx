import React from 'react'
import { Marker } from 'react-map-gl'
import {ReactComponent as Pin} from "./icons/marker.svg"

const ShowMarkers = ({data, onClick,setViewport,setSliderOn}) => {

    if(data.length){
return data.map((bin,index)=>(
    
        <Marker key = {`marker-${index}`} 
        longitude ={bin.geometry[0]}
         latitude={bin.geometry[1]}
         offsetLeft={-15}
         offsetTop={-15}
         onClick= {()=> {setSliderOn(true)
            setViewport({
                latitude: bin.geometry[1],
                longitude: bin.geometry[0],
                zoom: 12.5,
              });
            onClick(bin)}}
            onNativeClick ={()=> {console.log(bin)
                setViewport({
                    latitude: bin.geometry[1],
                    longitude: bin.geometry[0],
                    zoom: 12.5,
                  });
                onClick(bin)}}
            onDoubleClick= {()=>{setViewport({
                latitude: bin.geometry[1],
                longitude: bin.geometry[0],
                zoom: 15.5,
              });
            onClick(bin)}}
         ><Pin height={"40px"} fill="green" stroke="white"/>
             {/* <MdLocationPin color="green" size={30}/> */}
             </Marker>
    ))}
    else if(data.geometry){
        
        return <Marker key = {`marker-1`} 
        longitude ={data.geometry[0]}
         latitude={data.geometry[1]}
         offsetLeft={-15}
         offsetTop={-15}
         onClick= {()=> onClick(data)}
         >
           <Pin/>
             {/* <MdLocationPin color="green" size={40}/> */}
             </Marker>
    } else {return <div/>}
}

export default ShowMarkers

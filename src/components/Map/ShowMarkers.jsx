import React from 'react'
import { Marker } from 'react-map-gl'
import {MdLocationPin} from 'react-icons/md'

const ShowMarkers = ({data, onClick,setViewport}) => {

    if(data.length){
return data.map((bin,index)=>(
    
        <Marker key = {`marker-${index}`} 
        longitude ={bin.geometry[0]}
         latitude={bin.geometry[1]}
         offsetLeft={-15}
         offsetTop={-15}
         onClick= {()=> {console.log(bin)
            setViewport({
                latitude: bin.geometry[1],
                longitude: bin.geometry[0],
                zoom: 12,
              });
            onClick(bin)}}
         >
             <MdLocationPin color="green" size={40}/>
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
             <MdLocationPin color="green" size={40}/>
             </Marker>
    } else {return <div/>}
}

export default ShowMarkers

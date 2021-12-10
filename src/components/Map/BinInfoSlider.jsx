import React from 'react'
import {ReactComponent as Down} from "./icons/downArrow.svg"
const BinInfoSlider = ({info,sliderOn,setSliderOn}) => {


    const  types = [{material:"plastic", color:"#BD5F60"},
    {material:"bottles", color:"#E7B562"},
    {material:"paper", color:"#7871AA"},
    {material:"clothes", color:"#008658"},
    {material:"glass", color:"#9DE1DF"},
    {material:"metal", color:"#FF8B26"},
    {material:"organic", color:"#7CAC79"},
    {material:"medicine", color:"#F4B09B"},
    {material:"battery", color:"#327DA3"}]


    const blob = (material,color) =>{ 
        return  <div className="bin--slider--blob">
            <svg id="visual" viewBox="0 0 20 20" width="50" height="50" 
          ><g transform="translate(10.721609462891447 9.00644248361497)">
               <path d="M5.1 -2.9C6.2 -1.1 6.4 1.3 5.3 3.6C4.3 5.8 2.2 7.9 -0.2 8C-2.6 8.2 -5.2 6.3 
               -6.5 3.9C-7.8 1.5 -7.8 -1.5 -6.5 -3.4C-5.2 -5.3 -2.6 -6.2 -0.3 -6C2 -5.8 4 -4.7 5.1 -2.9"
                fill={color}></path></g></svg>
                <span className="bin--slider--material--name">{material}</span>
                </div>}


    const display = <div className="bin--slider--info">
    <h2 className="bin--slider--name">{info.name}</h2> 
    <h5 className="bin--slider--location">({info.geometry[0].toFixed(2)}, {info.geometry[1].toFixed(2)})</h5>
    </div>

    return (
        <div className={sliderOn?"bin--slider bin--slider--open":"bin--slider bin--slider--closed"}>
            <Down className="bin--slider--arrow" width="10vw" onClick={()=>{console.log(sliderOn);setSliderOn(false)}}/>
            {display}
            <div className="bin--slider--blobs">{types.map((type)=>{
                
                return info[type.material]>1 && blob(type.material, type.color)}
                             
                )}</div>
            
        </div>
    )
}

export default BinInfoSlider

import React from 'react'
import {ReactComponent as Bottles} from "./icons/bottles.svg" 
import {ReactComponent as Glass} from "./icons/glass.svg" 
import {ReactComponent as Paper} from "./icons/paper.svg" 
import {ReactComponent as Metal} from "./icons/metal.svg" 
import {ReactComponent as Clothes} from "./icons/clothes.svg" 
import {ReactComponent as Plastic} from "./icons/plastic.svg" 
import {ReactComponent as Battery} from "./icons/battery.svg" 
import {ReactComponent as Organic} from "./icons/organic.svg" 
import {ReactComponent as Medicine} from "./icons/medicine.svg" 

 const FilterBTN = ({item,index,handleFilters,active,filterArray}) => {


    
    




    return (
        <div key ={index} className="filter--btn--box">
            {/* <style jsx>
    {`

            

//         svg{transition: all 1.2s cubic-bezier(0.44, 0.6, 0.22, 1.54);
//             pointer-events:none;}

//         .filter--btns{
//             transition:all 1.2s cubic-bezier(0.44, 0.6, 0.22, 1.54);
//             position:relative;
//             overflow:hidden;
//             width:88px;
//             height:88px;
//             border:none;
//             border-radius:8px;
//             display:flex;
//             flex-direction:column;
//             justify-content:;
//             align-items:center;
//             padding: 8px;  
//             box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  
        }
        .filter--btn{
            background:#F7F7F5;
        }

      .filter--icon {
      height:40px;
        width:40px;

    }
      .filter--icon--active {
          padding-top:10px;
          stroke:#F7F7F5 !important;
          transform: scale(2);
        }

        .filter--span{
            pointer-events:none;
            transition: all 1.5s cubic-bezier(0.44, 0.6, 0.22, 1.14);
            color:black;

        }

        .filter--span--active{
            color:#F7F7F5;
            transform: translatey(50px);
            opacity: 0;
        }

        
        .filter--plastic{
            background:#BD5F60}
        .filter--bottles{
            background:#E7B562}
        .filter--paper{
            background:#7871AA}
        .filter--clothes{
            background:#008658}
        .filter--glass{
            background:#9DE1DF}
        .filter--metal{
            background:#FF8B26}
        .filter--organic{
            background:#7CAC79}
        .filter--medicine{
            background:#F4B09B}
        .filter--battery{
            background:#327DA3}

    `}
  </style> */}

<button className={`${filterArray.indexOf(item)===-1?"filter--btns filter--btn":`filter--btns filter--${item} filter--btn--active`}`}
name={item}
disabled={active?false:true}
onClick = {(e)=>{
    console.log(item)
    handleFilters(e)}}
>

{item==="metal"&&<Metal className={`${filterArray.indexOf(item)===-1?"filter--icon":"filter--icon filter--icon--active"}`} />}
{item==="plastic"&&<Plastic className={`${filterArray.indexOf(item)===-1?"filter--icon":"filter--icon filter--icon--active"}`} />}
{item==="paper"&&<Paper className={`${filterArray.indexOf(item)===-1?"filter--icon":"filter--icon filter--icon--active"}`} />}
{item==="glass"&&<Glass className={`${filterArray.indexOf(item)===-1?"filter--icon":"filter--icon filter--icon--active"}`} />}
{item==="bottles"&&<Bottles className={`${filterArray.indexOf(item)===-1?"filter--icon":"filter--icon filter--icon--active"}`} />}
{item==="clothes"&&<Clothes className={`${filterArray.indexOf(item)===-1?"filter--icon":"filter--icon filter--icon--active"}`} />}
{item==="battery"&&<Battery className={`${filterArray.indexOf(item)===-1?"filter--icon":"filter--icon filter--icon--active"}`} />}
{item==="organic"&&<Organic className={`${filterArray.indexOf(item)===-1?"filter--icon":"filter--icon filter--icon--active"}`} />}
{item==="medicine"&&<Medicine className={`${filterArray.indexOf(item)===-1?"filter--icon":"filter--icon filter--icon--active"}`} />}

<span className={`${filterArray.indexOf(item)===-1?"filter--span":"filter--span filter--span--active"}`}>{item==="medicine"||item==="organic"||item==="battery"?<span className="filter--span--disabled">{item}</span>:`${item}`}</span>
</button>

  {/* <input
            className="filter-checkbox"
            type="checkbox"
            id={item}
            name={item}
            value=""
            disabled={active?false:true}
            onClick = {(e)=>{
                handleFilters(e)
                }}
            />
            <label
            className = "filter-label"
            htmlFor={item}
            
//             >
//                 {item}</label> */}

        </div>
    )
}

export default FilterBTN

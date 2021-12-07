import React from 'react'
import FilterBTN from './FilterBTN'



const TrashTypes = ({handleFilters}) => {

let types = [{material:"plastic", active:true},
{material:"bottles", active:true},
{material:"paper", active:true},
{material:"clothes", active:true},
{material:"glass", active:true},
{material:"metal", active:true},
{material:"organic", active:false},
{material:"medicine", active:false},
{material:"battery", active:false}]

    return (
        <div className="map--buttons" >
            {types.map((item,index)=>(<FilterBTN 
            index={index} 
            item={item.material}
            active={item.active}
            key={index}
            handleFilters={handleFilters}/>))}
        </div>
    )
}

export default TrashTypes

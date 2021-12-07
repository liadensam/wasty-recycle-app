import React from 'react'

const FilterBTN = ({item,index,handleFilters,active}) => {
    return (
        <div key ={index}>
            <style jsx>
    {`
      .filter-checkbox:checked + label {
        background-color: rgba(73, 73, 73, 0.747);
        color: white }
      input[type="checkbox"] { display: none; }
    `}
  </style>
  <input
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
            
            >{item}</label>

        </div>
    )
}

export default FilterBTN

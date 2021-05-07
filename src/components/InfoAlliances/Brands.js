import React from 'react'
import {Brand} from './AlliancesElements'
import './tooltip.css'

const Brands = ({img, description, title}) => {
  return (
    <div className="tooltip top">
      <Brand src={img} alt={title} />
      <span className="tiptext">
        {description}
      </span>
    </div>
  )
}

export default Brands

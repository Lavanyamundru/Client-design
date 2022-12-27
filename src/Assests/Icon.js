/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Icon = ({iconName,id,iconStyle}) => {
  return (
    <span id={iconStyle}>
        <img src={iconName} id={id}/>
    </span>
  )
}

export default Icon

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FontAwesome = (props) => {
    const{iconName,className}=props
  return (
    <FontAwesomeIcon icon={iconName} className={className}/>
  )
}

export default FontAwesome
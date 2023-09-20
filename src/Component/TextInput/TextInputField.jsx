import { TextField } from '@mui/material'
import React from 'react'

const TextInputField = (props) => {
    const{variant,className,onchange,value}=props
  return (
    <TextField variant={variant} className={className} onChange={onchange} value={value}/>
  )
}

export default TextInputField
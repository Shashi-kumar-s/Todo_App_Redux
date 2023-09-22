import { TextField } from '@mui/material'
import React from 'react'

const TextInputField = (props) => {
    const{variant,className,onchange,value,autofocus,autoComplete}=props
  return (
    <TextField variant={variant} className={className} onChange={onchange} value={value} autoFocus={autofocus} autoComplete={autoComplete}/>
  )
}

export default TextInputField
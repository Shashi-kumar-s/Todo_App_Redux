import { Button } from '@mui/material'
import React from 'react'

const CategoryButton = (props) => {
    const {value,onclick,variant}=props
  return (
    <Button variant={variant} onClick={onclick}>{value}</Button>
  )
}

export default CategoryButton
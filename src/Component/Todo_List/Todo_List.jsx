import { Box, Checkbox, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import FontAwesome from "../FontAwesome/FontAwesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import {Deletetodo} from "../../redux/actions/Todo_Action"

const Todo_List = () => {
  const dispatch=useDispatch()
  const data = useSelector((state) => state)

  return (
    <>
      {data.map((ele, i) => {
        return (
          <Box key={i} className="bg-black text-white my-1 p-2 rounded-lg flex justify-between items-center">
            <Box className="flex items-center">
            <Checkbox
              size="small"
              className="checkbox"
            />
            <Typography>{ele.name}</Typography>
            </Box>
            <Box>
            <FontAwesome iconName={faEdit} className={"font_icon mx-2 text-green-400 cursor-pointer"}/>
            <FontAwesome iconName={faTrash} className={"font_icon mx-1 text-red-600 cursor-pointer"} onClick={()=>dispatch(Deletetodo(ele.id))}/>
            </Box>
          </Box>
        )
      })}
    </>
  )
}

export default Todo_List

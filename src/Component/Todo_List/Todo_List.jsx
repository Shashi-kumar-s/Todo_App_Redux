import { Box, Button, Checkbox, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import FontAwesome from "../FontAwesome/FontAwesome"
import { faCircle, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { CheckboxTodo, DeleteTodo } from "../../redux/actions/Todo_Action"

const Todo_List = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state)
  console.log(data)
 
  return (
    <>
      {data.map((ele) => {
        return (
          <Box
            key={ele.id}
            className="bg-black text-white my-1 p-2 rounded-lg flex justify-between items-center"
          >
            <Box className="flex items-center">
              <Checkbox
                size="small"
                className="checkbox"
                onChange={()=>dispatch(CheckboxTodo(ele.id,ele.checked=(ele.checked ?false:true)))}
              />
              <Typography>{ele.name}</Typography>
            </Box>
            <Box className="flex items-center">
              <Box>
                <Button onClick={() => dispatch(DeleteTodo(ele.id))}>
                  <FontAwesome
                    iconName={faTrash}
                    className={"font_icon mx-1 text-red-600 cursor-pointer"}
                  />
                </Button>
              </Box>
              <Box>
                {ele.checked===true ?(
                  <FontAwesome iconName={faCircle} className={"text-green-500"} />
                ):(
                  <FontAwesome iconName={faCircle} className={" text-blue-800"} />
                )}
              </Box>
            </Box>
          </Box>
        )
      })}
    </>
  )
}

export default Todo_List

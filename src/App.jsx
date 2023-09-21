import { Box, Typography } from "@mui/material"
import ModalBox from "./Component/Modal/Modal"
import Todo_List from "./Component/Todo_List/Todo_List"

const App = () => {
  return (
    <Box className="flex flex-col w-[50%] mx-auto border-solid border-2 border-sky-500 h-[70vh] bg-white p-8 mt-4 rounded-lg">
      <Box className="flex justify-between w-[100%]">
        <Box>
          <Typography className="font_icon">
            <b>Today</b>
          </Typography>
        </Box>
        <Box>
          <ModalBox />
        </Box>
      </Box>
      <hr />
      <Box className="mt-4"></Box>
      <Todo_List />
    </Box>
  )
}

export default App

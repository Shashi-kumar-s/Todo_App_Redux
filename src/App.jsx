import { Box, Typography } from "@mui/material"
import ModalBox from "./Component/Modal/Modal"
import { useState } from "react"
import { useSelector } from "react-redux"

const App = () => {
  const dataAll = useSelector((state) => state.data)

  const [inputData, setInputData] = useState("")

  const handleInput = (e) => {
    setInputData(e.target.value)
  }
  const handleReset = () => {
    setInputData("")
  }

  return (
    <Box className="flex flex-col w-[50%] mx-auto border-solid border-2 border-sky-500 h-[70vh] bg-white p-8 mt-4 rounded-lg">
      <Box className="flex justify-between w-[100%]">
        <Box>
          <Typography className="font_icon">
            <b>Today</b>
          </Typography>
        </Box>
        <Box>
          <ModalBox
            onchange={handleInput}
            value={inputData}
            onclick={handleReset}
          />
        </Box>
      </Box>
      <hr />
      <Box className="mt-4">
        {dataAll.map((ele, i) => {
          return (
            <Box
              key={i}
              className="bg-black text-white my-1 py-1 px-2 rounded-lg"
            >
              <Typography>{ele}</Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default App

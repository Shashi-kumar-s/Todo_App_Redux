import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import { useState } from "react"
import TextInputField from "../TextInput/TextInputField"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import FontAwesome from "../FontAwesome/FontAwesome"
import { useDispatch } from "react-redux"
import { Typography } from "@mui/material"
import { Addtodo } from "../../redux/actions/Todo_Action"

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  bgcolor: "background.paper",
  border: "2px solid blue",
  boxShadow: 24,
  p: 1,
}

const ModalBox = (props) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  //............................>

  const dispatch = useDispatch()
  const [inputData, setInputData] = useState("")

  const handleInput = (e) => {
    return setInputData(e.target.value)
  }

  const handleAdd = () => {
    dispatch(Addtodo({ id:Date.now(), name: inputData, checked: false }))
    setInputData("")
    handleClose()
  }

  return (
    <form onSubmit={() => dispatch(Addtodo(inputData))}>
      <Button onClick={handleOpen}>
        <FontAwesome iconName={faCirclePlus} className={"font_icon"} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-lg">
          <Typography>
            <b>Add Todo</b>
          </Typography>
          <TextInputField
            variant={"standard"}
            className={"w-[90%]"}
            onchange={handleInput}
            value={inputData}
          />
          <Box className="flex justify-between px-1 pt-4">
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleAdd}>
              Done
            </Button>
          </Box>
        </Box>
      </Modal>
    </form>
  )
}
export default ModalBox

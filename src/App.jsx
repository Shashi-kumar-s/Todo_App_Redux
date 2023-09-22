import { Box, Typography } from "@mui/material"
import ModalBox from "./Component/Modal/Modal"
import Todo_List from "./Component/Todo_List/Todo_List"
import CategoryButton from "./Component/button/CategoryButton"
import { useDispatch, useSelector } from "react-redux"
import { AllTodo, CompleteTodo, DeleteAllTodo, DeleteSelectedTodo, InCompleteTodo } from "./redux/actions/Todo_Action"

const App = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state)
  console.log(data);

  return (
    <Box className="flex flex-col w-[50%] mx-auto border-solid border-2 border-sky-500 h-[80vh] bg-white p-8 mt-4 rounded-lg">
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
      <Box className="flex justify-center items-center my-4 flex-wrap sm:px-2">
        {data.length !== 0 ? (
          <>
            <CategoryButton
              value={"All"}
              variant={"contained"}
              onclick={() => dispatch(AllTodo())}
            />
            <CategoryButton
              value={"Complete"}
              variant={"contained"}
              onclick={() => dispatch(CompleteTodo())}
            />
            <CategoryButton
              value={"Incomplete"}
              variant={"contained"}
              onclick={() => dispatch(InCompleteTodo())}
            />
            <CategoryButton
              value={"Delete Selected"}
              variant={"contained"}
              onclick={() => dispatch(DeleteSelectedTodo())}
            />
            <CategoryButton
              value={"Delete All"}
              variant={"contained"}
              onclick={() => dispatch(DeleteAllTodo())}
            />
          </>
        ) : (
          ""
        )}
      </Box>
      <Box className="mt-4 todo_List_Box px-2">
        <Todo_List />
      </Box>
    </Box>
  )
}

export default App

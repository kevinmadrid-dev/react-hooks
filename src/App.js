import { useContext } from "react"
import { MainSpace, ImageSpace, FormSpace } from "./styles"
import { Button } from "@mui/material"
import Form from "./Form/Form.jsx"
import { CounterContext } from "./Context.jsx"

function App() {
  const counterData = useContext(CounterContext)

  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <Button onClick={() => counterData.resta()}> - </Button>
        <Button onClick={() => counterData.suma()}> + </Button>
      </FormSpace>
    </MainSpace>
  )
}

export default App

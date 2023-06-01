import React from "react"
import { Box, Typography } from "@mui/material"
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles"
import DatosUsuario from "./DatosUsuario/DatosUsuario.jsx"
import DatosPersonales from "./DatosPersonales/DatosPersonales.jsx"
import DatosEntrega from "./DatosEntrega/DatosEntrega.jsx"
import Complete from "./Complete/Complete.jsx"
import Stepper from "../Stepper/Stepper.jsx"

const Form = () => {
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column"
      }}>
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>

      <FormSpace>
        <DatosUsuario />
        {/* <DatosPersonales />
        <DatosEntrega /> */}
      </FormSpace>
    </Box>
  )
}

export default Form

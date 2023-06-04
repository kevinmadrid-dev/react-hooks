import React, { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import { validarEmail, validarPassword } from "./ValidacionesDU"

const DatosUsuario = ({ updateStep }) => {
  const [email, setEmail] = useState({ value: "", valid: true })
  const [password, setPassword] = useState({ value: "", valid: true })

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
      onSubmit={(e) => {
        e.preventDefault()
        if (email.valid && password.valid) {
          console.log("Avanza")
          updateStep(1)
        } else {
          console.log("No avanza")
          updateStep(0)
        }
      }}>
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={email.valid === false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onBlur={() => {
          validarEmail(email)
        }}
        onChange={(input) => {
          const email = input.target.value
          setEmail({ value: input.target.value, valid: validarEmail(email) })
        }}
      />

      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={password.valid === false && "Ingresa una contraseña válida"}
        value={password.value}
        onChange={(input) => {
          const password = input.target.value
          setPassword({
            value: input.target.value,
            valid: validarPassword(password)
          })
        }}
      />

      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  )
}

export default DatosUsuario

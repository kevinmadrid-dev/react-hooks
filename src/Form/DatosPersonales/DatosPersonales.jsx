import React, { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import { validarName, validarLastName, validarPhone } from "./ValidacionesDP"

const DatosPersonales = ({ updateStep }) => {
  const [name, setName] = useState({ value: "", valid: true })
  const [lastName, setLastName] = useState({ value: "", valid: true })
  const [phone, setPhone] = useState({ value: "", valid: true })

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
        if (name.valid && lastName.valid && phone.valid) {
          console.log("Avanza")
          updateStep(2)
        } else {
          console.log("No avanza")
          updateStep(1)
        }
      }}>
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={name.valid === false}
        helperText={
          name.valid === false && "Ingresa un nombre válido, mínimo 3 carácteres"
        }
        value={name.value}
        onBlur={() => {
          validarName(name)
        }}
        onChange={(input) => {
          const name = input.target.value
          setName({ value: input.target.value, valid: validarName(name) })
        }}
      />

      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={lastName.valid === false}
        helperText={
          lastName.valid === false &&
          "Ingresa un apellido válido, mínimo 3 carácteres"
        }
        value={lastName.value}
        onBlur={() => {
          validarLastName(lastName)
        }}
        onChange={(input) => {
          const lastName = input.target.value
          setLastName({
            value: input.target.value,
            valid: validarLastName(lastName)
          })
        }}
      />

      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        error={phone.valid === false}
        helperText={
          phone.valid === false &&
          "Ingresa un número de celular válido, mínimo 9 carácteres"
        }
        value={phone.value}
        onBlur={() => {
          validarPhone(phone)
        }}
        onChange={(input) => {
          const phone = input.target.value
          setPhone({ value: input.target.value, valid: validarPhone(phone) })
        }}
      />

      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  )
}

export default DatosPersonales

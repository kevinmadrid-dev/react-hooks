import React, { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import { validarAddress, validarCity, validarEstado } from "./ValidacionesDE"

const DatosEntrega = ({ updateStep }) => {
  const [address, setAddress] = useState({ value: "", valid: true })
  const [city, setCity] = useState({ value: "", valid: true })
  const [estado, setEstado] = useState({ value: "", valid: true })

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
        if (address.valid && city.valid && estado.valid) {
          console.log("Avanza")
          updateStep(3)
        } else {
          console.log("No avanza")
          updateStep(2)
        }
      }}>
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={address.valid === false}
        helperText={address.valid === false && "Ingresa una dirección válida"}
        value={address.value}
        onBlur={() => {
          validarAddress(address)
        }}
        onChange={(input) => {
          const address = input.target.value
          setAddress({ value: input.target.value, valid: validarAddress(address) })
        }}
      />

      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={city.valid === false}
        helperText={city.valid === false && "Ingresa una ciudad válida"}
        value={city.value}
        onBlur={() => {
          validarCity(city)
        }}
        onChange={(input) => {
          const city = input.target.value
          setCity({ value: input.target.value, valid: validarCity(city) })
        }}
      />

      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={estado.valid === false}
        helperText={estado.valid === false && "Ingresa un estado o provincia válida"}
        value={estado.value}
        onBlur={() => {
          validarEstado(estado)
        }}
        onChange={(input) => {
          const estado = input.target.value
          setEstado({ value: input.target.value, valid: validarEstado(estado) })
        }}
      />

      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  )
}

export default DatosEntrega

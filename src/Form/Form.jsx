import React, { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { LogoSpace, FormSpace, Img } from "./styles"
import DatosUsuario from "./DatosUsuario/DatosUsuario.jsx"
import DatosPersonales from "./DatosPersonales/DatosPersonales.jsx"
import DatosEntrega from "./DatosEntrega/DatosEntrega.jsx"
import Complete from "./Complete/Complete.jsx"
import Stepper from "../Stepper/Stepper.jsx"
import Step from "./Step/Step.jsx"

import { validarEmail, validarPassword } from "./DatosUsuario/ValidacionesDU.js"
import {
  validarName,
  validarLastName,
  validarPhone
} from "./DatosPersonales/ValidacionesDP.js"
import { validarInput } from "./DatosEntrega/ValidacionesDE.js"

const Form = () => {
  const [step, setStep] = useState(0)
  const [pasos, setPasos] = useState({})

  const onSubmit = (e, step, pasos) => {
    console.log(step)
    e.preventDefault()
    let newStep = step + 1
    console.log(newStep)
    setStep(newStep)
    if (newStep === 3) {
      console.log("Eviar datos al backend", pasos)
    }
  }

  const handleChange = (element, position, currentStep, validator, pasos) => {
    const value = element.target.value
    const valid = validator(value)
    const cp = { ...pasos }
    cp[currentStep].inputs[position].value = value
    cp[currentStep].inputs[position].valid = valid

    setPasos(cp)
  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electrónico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un correo electrónico válido.",
          validator: validarEmail
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText:
            "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20.",
          validator: validarPassword
        },
        {
          label: "Cuenta de github",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText:
            "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20.",
          validator: validarPassword
        }
      ],
      buttonText: "Siguiente",
      onSubmit
    },
    1: {
      inputs: [
        {
          label: "Nombre",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 2 caracteres y máximo 30 caracteres.",
          validator: validarName
        },
        {
          label: "Apellidos",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 2 caracteres y máximo 50 caracteres.",
          validator: validarLastName
        },
        {
          label: "Número telefonico",
          type: "number",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 8 digitos y máximo 14 digitos.",
          validator: validarPhone
        }
      ],
      buttonText: "Siguiente",
      onSubmit
    },
    2: {
      inputs: [
        {
          label: "Direccion",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 4 caracteres.",
          validator: validarInput
        },
        {
          label: "Ciudad",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 4 caracteres.",
          validator: validarInput
        },
        {
          label: "Estado/Provincia",
          type: "text",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa al menos 4 caracteres.",
          validator: validarInput
        }
      ],
      buttonText: "Crear cuenta",
      onSubmit
    }
  }

  useEffect(() => {
    setPasos(stepsFlow)
  }, [])

  const updateStep = (step) => {
    setStep(step)
  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />
  }

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
        {step < 3 && <Stepper step={step} />}
        {/* {steps[step]} */}
        {step < 3 && pasos[step] && (
          <Step data={pasos[step]} step={step} pasos={pasos} />
        )}
        {step === 3 && <Complete />}
      </FormSpace>
    </Box>
  )
}

export default Form

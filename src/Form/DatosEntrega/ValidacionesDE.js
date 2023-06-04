export const validarAddress = (address) => {
  const length = address.length

  if (length >= 3 && length < 15) {
    return true
  } else {
    return false
  }
}

export function validarCity(city) {
  const length = city.length

  if (length >= 3 && length < 15) {
    return true
  } else {
    return false
  }
}

export function validarEstado(estado) {
  const length = estado.length

  if (length >= 3 && length < 15) {
    return true
  } else {
    return false
  }
}

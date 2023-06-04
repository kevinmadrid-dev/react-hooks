export const validarName = (name) => {
  const length = name.length

  if (length >= 3 && length < 15) {
    return true
  } else {
    return false
  }
}

export function validarLastName(lastName) {
  const length = lastName.length

  if (length >= 3 && length < 15) {
    return true
  } else {
    return false
  }
}

export function validarPhone(phone) {
  const length = phone.length

  if (length >= 9 && length < 15) {
    return true
  } else {
    return false
  }
}

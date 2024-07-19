export const checkValidation = (email, password) => {
  console.log("Inside validation function")
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  )
  const isValidPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(
    password
  )

  if (!isValidEmail) return "Email is not valid"
  if (!isValidPass) return "Password is not valid"
  return null
}

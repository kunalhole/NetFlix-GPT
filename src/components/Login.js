import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { useRef, useState } from "react"
import { auth } from "../utils/firebase"
import { checkValidation } from "../utils/validate"
import Header from "./Header"

const Login = () => {
  const [IsSingInForm, setIsSingInForm] = useState(true)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const [validation, setValidation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationMsg = checkValidation(
      emailRef.current.value,
      passRef.current.value
    )
    setValidation(validationMsg)
    if (validationMsg) return
    if (!IsSingInForm) {
      //Sing Up
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          console.log(userCredential)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setValidation(errorCode + " " + errorMessage)
        })
    } else {
      //Sing In
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          console.log(userCredential)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setValidation(errorCode + " " + errorMessage)
        })
    }
  }

  const handlClick = () => {
    setIsSingInForm(!IsSingInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute w-3/12  bg-black p-12 mt-36 right-0 left-0 mx-auto text-white bg-opacity-85 rounded-md">
        <h1 className="font-bold text-3xl mb-5 m-2">
          {IsSingInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSingInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 mb-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-4 mb-4 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={passRef}
          type="password"
          placeholder="Password"
          className="p-4 mb-4 w-full bg-gray-700 rounded-md"
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="px-6 py-4 bg-red-700 font-semibold w-full mb-2 mt-4 rounded-md"
        >
          {IsSingInForm ? "Sign In" : "Sign Up"}
        </button>
        {validation && (
          <p className="text-xl mt-2 mb-2 text-red-500 font-bold">
            {validation}
          </p>
        )}

        <p className="cursor-pointer" onClick={handlClick}>
          {IsSingInForm
            ? "Are you new to NetFlix? Sing Up Now"
            : "You Already User Plz Sing In"}
        </p>
      </form>
    </div>
  )
}

export default Login

import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [IsSingInForm, setIsSingInForm] = useState(true)
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
          {IsSingInForm ? "Sign Up" : "Sign In"}
        </h1>
        {!IsSingInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 mb-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 mb-4 w-full bg-gray-700 rounded-md"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 mb-4 w-full bg-gray-700 rounded-md"
        />
        <button className="px-6 py-4 bg-red-700 font-semibold w-full mb-2 mt-4 rounded-md">
          {IsSingInForm ? "Sign Up" : "Sign In"}
        </button>

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

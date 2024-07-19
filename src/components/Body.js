import { useEffect } from "react"
import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import { auth } from "../utils/firebase"
import Browser from "./Browser"
import Login from "./Login"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { onAuthStateChanged } from "firebase/auth"

const Body = () => {
  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    })
  }, [])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body

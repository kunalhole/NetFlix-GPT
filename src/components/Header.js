import { onAuthStateChanged, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/userSlice"

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <div className="absolute w-full  px-8 py-2 bg-gradient-to-t from-black z-10 flex justify-between items-center">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div>
          <button
            onClick={handleSingOut}
            className="px-6 py-3 bg-red-500 text-black font-semibold rounded-md"
          >
            Sing Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header

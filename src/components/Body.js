import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body

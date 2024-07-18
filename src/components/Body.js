import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import Browser from "./Browser"
import Login from "./Login"

const Body = () => {
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
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body

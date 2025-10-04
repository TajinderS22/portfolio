import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./components/Home"

const App = () => {

  const routes=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    }
  ])

  return (
    <div className="min-h-[100svh]  mx-auto">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
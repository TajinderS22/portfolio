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
    <div className="h-fit min-h-svh bg-white dark:bg-black p-1  mx-auto">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
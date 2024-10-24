import { createBrowserRouter } from "react-router-dom"

import { Work } from "../pages/Work"
import { Home } from "../pages/Home"
import { Projects } from "../pages/Projects"
import Register from "../fat-fighters/Register"

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/my-work", element: <Work /> },
    { path: "/my-projects", element: <Projects /> },
    // { path: "/fat-fighters", element: <Fat /> },
    { path: "/fat-fighters", element: <Register /> },
  ])
  
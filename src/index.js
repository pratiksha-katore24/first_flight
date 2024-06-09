import ReactDom from "react-dom/client"

import Home from "../src/views/Home/Home"
import Contact from "../src/views/Contact/Contact"
import About from "../src/views/About/About"

import{
    createBrowserRouter,
    RouterProvider
}  from "react-router-dom"

const root = ReactDom.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
])

root.render(<RouterProvider router={router}/>)


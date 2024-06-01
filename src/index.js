import ReactDom from "react-dom/client"

import Home from "./views/Home/Home"
import Contact from "./views/Contact/Contact"
import About from "./views/About/About"

const root = ReactDom.createRoot(document.getElementById("root"))


const path = window.location.pathname

if(path=="/")
    {
        root.render(<Home/>)
    }
else if (path=="/about")
    {
        root.render(<About/>)
    }
else if (path=="/contact")
    {
        root.render(<Contact/>)
    }


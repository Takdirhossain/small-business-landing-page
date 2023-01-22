import { createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {path:"/", element: <Home></Home>},
    {path: "/contact", element: <Contact></Contact>}
])
export default router
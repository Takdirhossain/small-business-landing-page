import { createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {path:"/", element: <Home></Home>},
    {path: "/contact", element: <Contact></Contact>},
    {path: "/dashboard", element: <Dashboard></Dashboard>}

])
export default router
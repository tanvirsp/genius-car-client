import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About/About";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ManageInventory from "../../Pages/ManageInventory/ManageInventory";
import Orders from "../../Pages/Orders/Orders";
import Services from "../../Pages/Services/Services/Services";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element:  <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/services",
                element : <Services />
            },
            {
                path: "/blog",
                element : <Blog />
            },
            {
                path: "/contact",
                element : <Contact/>
            },
            {
                path: "/login",
                element : <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute> <Checkout /></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: "/orders",
                element: <PrivateRoute><Orders /></PrivateRoute>
            },
            {
                path: "/manage_inventory",
                element: <PrivateRoute> <ManageInventory /> </PrivateRoute>
            }


        ]

    }
])

export default router;
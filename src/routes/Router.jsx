import { createBrowserRouter, } from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Home from "../components/Home/Home";
import Doctors from "../components/Doctors/Doctors";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/doctors')
            },
            {
                path: 'doctors',
                element: <PrivateRoutes><Doctors /></PrivateRoutes>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element:  <Registration />
            }
        ]
    }
])

export default router;
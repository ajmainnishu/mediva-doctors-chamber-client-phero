import { createBrowserRouter, } from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import Home from "../components/Home/Home";

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
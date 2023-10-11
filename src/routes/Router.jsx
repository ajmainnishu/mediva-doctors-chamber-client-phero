import { createBrowserRouter, } from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
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
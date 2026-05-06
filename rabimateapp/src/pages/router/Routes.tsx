import { createBrowserRouter } from "react-router";
import App from "../App/App";
import Login from "../login/components/Login";
import RabbitList from "../Rabbits/RabbitList";
import LoginForm from "../account/LoginForm";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Login /> },
            { path: 'rabbits', element: <RabbitList /> },
            { path: 'login', element: <LoginForm /> }
            // { path: '*', element: <Navigate replace to='/not-found' /> }
        ]
    }
])


import { createBrowserRouter } from "react-router";
import App from "../App/App";
import Login from "../login/components/Login";
import RabbitList from "../Rabbits/RabbitList";
import RabbitDashboard from "../Rabbits/RabbitDashboard";
import LoginForm from "../account/LoginForm";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Login /> },
            { path: 'rabbits', element: <RabbitList /> },
            { path: 'rabbits-dashboard', element: <RabbitDashboard /> },
            { path: 'login', element: <LoginForm /> }
            // { path: '*', element: <Navigate replace to='/not-found' /> }
        ]
    }
])


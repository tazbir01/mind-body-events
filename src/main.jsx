import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Root from './Pages/Root/Root';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/Section/ServiceDetails/ServiceDetails';
import AuthProvder from './Provider/AuthProvder';
import PrivateRoute from './PrivatRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/data.json")
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: () => fetch("/public/data.json")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvder>
      <RouterProvider router={router} />
    </AuthProvder>
  </React.StrictMode>,
)

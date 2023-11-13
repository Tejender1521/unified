import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Visa from "@/scenes/visa";
import Home from "@/scenes/home";
import Benefits from "@/scenes/welcome";
import ContactUs from '@/scenes/contactUs';
import Conferences from '@/scenes/conferences';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './scenes/registration';
import Scope from './scenes/scope';
import Comingsoon from './scenes/comingsoon';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: [<Home/>,<Benefits/>,<Conferences/>,<Scope/>,<ContactUs/>]
      },
      {
        path: "/visa",
        element: <Visa/>
      },
      {
        path: "/registration",
        element: <Registration/>
      },
      {
        path: "/comingsoon",
        element: <Comingsoon/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

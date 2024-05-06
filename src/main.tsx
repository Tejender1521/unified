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
import Commitees from './scenes/commitees';
import Patron from './scenes/patron';
import Conferencechair from './scenes/conferencechair';
import Conferencecochair from './scenes/conferencecochair';
import LocalCommitee from "./scenes/localcommitee";
import Sponsor from './scenes/sponsor';
import Scientificcommitee from './scenes/scientificcommitee';
import Keynote from './scenes/keynote';
import Submission from './scenes/submission';
import Keydates from './scenes/keydates';
import Jaipur from './scenes/jaipur';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: [
          <Home />,
          <Benefits />,
          <Conferences />,
          <Scope />,
          <ContactUs />,
        ],
      },
      {
        path: "/visa",
        element: <Visa />,
      },
      {
        path: "/keydates",
        element: <Keydates/>,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/commitees",
        element: <Commitees />,
      },
      {
        path: "/comingsoon",
        element: <Comingsoon />,
      },
      {
        path: "/patron",
        element: <Patron />,
      },
      {
        path: "/conferencechair",
        element: <Conferencechair />,
      },
      {
        path: "/conferencecochair",
        element: <Conferencecochair />,
      },
      {
        path: "/organizingcommitee",
        element: <LocalCommitee />,
      },
      {
        path: "/sponsor",
        element: <Sponsor />,
      },
      {
        path: "/keynote",
        element: <Keynote />,
      },
      {
        path: "/scientificcommitee",
        element: <Scientificcommitee />,
      },
      {
        path: "/submission",
        element: <Submission/>,
      },
      {
        path: "/jaipur",
        element: <Jaipur/>,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Homepage from './pages/Homepage.jsx';
import AllProjects from './pages/AllProjects';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/all-projects",
    element: <AllProjects />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

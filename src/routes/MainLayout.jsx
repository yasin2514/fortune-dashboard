import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

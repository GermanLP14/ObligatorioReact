import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./routes/Login.jsx";
import Home from "./routes/Home.jsx";
import AgregarPersona from "./routes/AgregarPersona";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/Login",
    element: <Login />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/Home",
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/AgregarPersona",
    element: <AgregarPersona />,
    errorElement: <h1>Error</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>
);

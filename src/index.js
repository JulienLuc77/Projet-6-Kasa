import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>
  },
  {
    path: "/appartment",
    element: <h1>Nos locations</h1>
  },
  {
    path: "/about",
    element: <h1>A Propos</h1>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

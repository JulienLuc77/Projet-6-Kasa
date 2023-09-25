import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import Apartment from './pages/Apartment';

const HeaderFooterLayout = () => {
 return <>
 <Navbar />
 <Main>
   <Outlet />
 </Main>
 <Footer />
 </>
}
const router = createBrowserRouter ([
  {
    element: <HeaderFooterLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/apartment",
        element: <Apartment />
      },
      {
        path: "/about",
        element: <h1>A Propos</h1>
      },
    ],
  },
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

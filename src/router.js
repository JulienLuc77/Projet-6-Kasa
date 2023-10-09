import React from 'react';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Apartment from './pages/Apartment';
import About from './pages/About';
import Error from './pages/Error';

const HeaderFooterLayout = () => {
 return <>
 <Navbar />
 <Main>
   <Outlet />
 </Main>
 <Footer />
 </>
}
function Router () {
const router = createBrowserRouter ([
    {
      element: <HeaderFooterLayout />,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/flat",
          element: <Apartment />
        },
        {
          path: "/about",
          element: <About />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />
  
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default Router;
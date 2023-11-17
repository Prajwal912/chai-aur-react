import React from "react";
import { Route, createRoutesFromElements } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Header/Contact/Contact";
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {path: '', element:<Home />},
//       {path: 'about', element:<About />},
//       {path: 'contact', element:<Contact />},
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

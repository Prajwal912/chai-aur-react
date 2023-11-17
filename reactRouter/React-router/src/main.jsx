import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Header/Contact/Contact'
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)

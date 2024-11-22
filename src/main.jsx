import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, createBrowserRouter, Route, RouterProvider} from 'react-router-dom'

import Home from './view/home/Home.jsx'
import About from './view/about/About.jsx'
import Layout from './view/layout/Layout.jsx'
import Contact from './view/contact/Contact-us.jsx'
import AboutCompany from './view/aboutCompany/AboutCompany.jsx'
import UserDetails from './view/dynamic/DynamicPage.jsx'
import PageNotFound from './view/notfound/NotFound.jsx'
import Movies from './view/movies/Movies.jsx'
import MoviesDetails from './view/movies/MoviesDetails.jsx'


const route = createBrowserRouter(
[
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
        },
        {
          path: 'about',
          element: <About/>
          },
          {
            path: 'about',
            children:[
              {
                path: 'company',
                element: <AboutCompany/>
              }
            ]
            },
          {
            path: '/contact',
            element: <Contact/>
          },
          {
            path: "/contact/:userId",
            element: <UserDetails/>
          },
          {
            path: '/movies',
            element: <Movies/>
          },
          {
            path: '/movies/:id',
            element: <MoviesDetails/>
          }

          
    ]
  },
  {
    path: '*',
    element: <PageNotFound/>
  }
]




)


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <BrowserRouter>
  //   <Navbar/>
  //   <App />
  //   <Footer/>
  
  //   </BrowserRouter>

  // </StrictMode>

  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
)

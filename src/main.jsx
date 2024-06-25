import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from '../src/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './Componentes/Pages/Sobre'
import Contato from './Componentes/Pages/Contato'
import Filmes from './Componentes/Pages/Filmes'
import PageNotFound from './Componentes/Pages/PageNotFound'
import Home from './Componentes/Pages/Home'
import DetalhesFilme from './Componentes/Pages/DetalhesFilme'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        { index: true, element: <Home/> },  
        { path: "filmes", element: <Filmes/> },
        { path: "filmes/:id", element: <DetalhesFilme/> },
        { path: "sobre", element: <Sobre/> },
        { path: "contato", element: <Contato/> },
        { path: "*", element: <PageNotFound/> }      
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

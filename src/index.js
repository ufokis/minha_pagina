import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Home from './routes/home';
import Contact from './routes/contact';
import Pesquisa from './routes/pesquisa';
import Publicacoes from './routes/publicações';

import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';
import ErrorPage from './routes/errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contato",
        element: <Contact />
      },
      {
        path:"pesquisa",
        element: <Pesquisa />
      },
      {
        path:"publicacoes",
        element: <Publicacoes />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  
);
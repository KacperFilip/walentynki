import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoutePage from './components/RoutePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wspomnienie from './components/Wspomnienie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <h1>404 Nie znaleziono strony</h1>
  },
  {
    path: '/zdjecia/',
    element: <RoutePage/>
  },
  {
    path: '/wspomnienia/:wspomnieniaId',
    element: <Wspomnienie/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


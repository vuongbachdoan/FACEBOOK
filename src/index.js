import React from 'react';
import ReactDOM from 'react-dom/client';
import { appRouter } from './core/router';
import { RouterProvider } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './shared/styles/__root__.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Application from './Views/Application';
import { ToastContainer } from 'react-toastify';

// Assets
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Application />

      <ToastContainer
      position="top-center"
      hideProgressBar={true} />

    </BrowserRouter>
  </React.StrictMode>
);

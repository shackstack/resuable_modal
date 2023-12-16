import React from 'react';
import ReactDOM from 'react-dom/client';
import { Modal } from './lib';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <div>122221</div>
    <Modal portalId='portal' />
  </React.StrictMode>
);

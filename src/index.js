import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { GlobalStateProvider } from './store/global/global.provider';
import CombinedContextProviders from "./store/CombinedContextProviders";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CombinedContextProviders>
      <App />
    </CombinedContextProviders>
  </React.StrictMode>
);

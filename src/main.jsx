import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';    
import './index.css'; 
// This renders the main App component to the root div in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



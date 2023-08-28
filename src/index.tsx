import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="container">
      <h1 className='d-flex justify-content-center mb-5'>Agenda</h1>
      <App />
    </div>
  </React.StrictMode>
);

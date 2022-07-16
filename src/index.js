import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mensaje from './components/Mensaje';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(    
  <Mensaje nombre="Gustavo"></Mensaje>
);

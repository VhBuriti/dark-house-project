import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss'
import NavBar from './components/common/NavBar';
import TopBar from './components/common/TopBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TopBar />
    <NavBar />
  </React.StrictMode>
);
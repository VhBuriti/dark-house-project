import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss'
import NavBar from './components/common/NavBar';
import TopBar from './components/common/TopBar';
import PostCard from './components/sections/PostCard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TopBar />
    <NavBar />
    <PostCard />
  </React.StrictMode>
);
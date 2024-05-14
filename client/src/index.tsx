import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss'
import NavBar from './components/common/NavBar';
import TopBar from './components/common/TopBar';
import MainBanner from './components/sections/MainBanner';
import CreateNewPost from './components/sections/CreateNewPost';
import AllPosts from './components/sections/AllPosts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TopBar />
    <NavBar />
    <MainBanner />
    <AllPosts />
    <CreateNewPost />
  </React.StrictMode>
);
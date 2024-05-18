import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import NavBar from "./components/common/NavBar";
import TopBar from "./components/common/TopBar";
import MainBanner from "./components/sections/MainBanner";
import AllPosts from "./components/sections/AllPosts";

import CreateNewPostPage from "./pages/CreateNewStory";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <TopBar />
    <NavBar />

    <Routes>
      <Route
        path="/"
        element={
          <>
            <MainBanner />
            <AllPosts />
          </>
        }
      />

      <Route path="/create-new-story" element={<CreateNewPostPage />} />
    </Routes>
  </Router>
);

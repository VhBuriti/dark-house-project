import ReactDOM from "react-dom/client";
import NavBar from "./components/common/NavBar";
import TopBar from "./components/common/TopBar";
import PostPage from "./pages/PostPage";
import HomePage from "./pages/HomePage";
import CreateNewPostPage from "./pages/CreateNewStory";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginModal from "./components/sections/Users/Login/LoginModal";
import RegisterNewUser from "./components/sections/Users/Register/RegisterNewUser";

import "./styles/global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
    <TopBar />
    <NavBar />

    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/story/:id" element={<PostPage />} />

      <Route path="/create-new-story" element={<CreateNewPostPage />} />

      <Route path='/login' element={<LoginModal/>}/>

      <Route path='/create-new-account' element={<RegisterNewUser/>}/>

    </Routes>
  </Router>
);

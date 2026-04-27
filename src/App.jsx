import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetails";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar renders on every page — it's outside <Routes> */}
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/users/:id" element={<UserProfile />} />

          {/* TODO: Add a catch-all 404 route.
              Hint: path="*" matches any URL that didn't match above.
              The element should be <NotFound /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
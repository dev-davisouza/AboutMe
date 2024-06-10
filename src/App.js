import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultStructure from "components/DefaultStructure";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

console.log(window.location);

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Menu />

        <Routes>
          <Route path="/" element={<DefaultStructure />}>
            <Route index element={<Home />} />
            <Route path="about-me" element={<AboutMe />} />
          </Route>
          <Route path="posts/:id//*" element={<Post />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import News from "./component/News";
import Footer from "./layout/Footer";
import Impressum from "./component/Impressum";
import Datenschutz from "./component/Datenschutz";
import Contact from "./component/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solecitos" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

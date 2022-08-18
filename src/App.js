import { Routes, Route } from "react-router-dom";
import Header from "./Companents/Header";
import Footer from "./Companents/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

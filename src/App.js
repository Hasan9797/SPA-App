import { Routes, Route } from "react-router-dom";
import Header from "./Companents/Header";
import Footer from "./Companents/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Companents/NotFound";

function App() {
  return (
    <div>
      <Header />
      <main className="content container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

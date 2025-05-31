import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import Home from "./components/Home/Home";
import Footer from "./Footer";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Header />
      <main className="fix">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

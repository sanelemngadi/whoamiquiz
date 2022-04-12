import NavBar from "./hocs/NavBar";
import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Contact />} exact path="/contact" />
        <Route element={<About />} exact path="/about" />
      </Routes>
    </Router>
  );
}

export default App;

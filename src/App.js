import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import "./App.css"
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay"
function App() {
  return (
    <div className="App">
      <Router>          <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />

          <Route path="/expresience" element={<Experience />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

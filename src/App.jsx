import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProblemEditor from "./workspace/ProblemEditor";
import Navbar from "./workspace/Navbar";
// import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/editor/:id" element={<ProblemEditor />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

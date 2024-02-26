import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Error from "./components/pages/Error";
import Post from "./components/pages/Post";
import Dashboard from "./components/pages/Dashboard";

function App() {
  let isLogged = true;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact username="Pooja" />} />
          <Route path="/post/:category" element={<Post />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={isLogged ? <Dashboard /> : <Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;

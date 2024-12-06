import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import { About, Contact, Home, Projects } from "./pages";
import Navbar from "./components/navbar";
   
const app = () => {
  return (
    <main className="bg-slate-300/20">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </main>
  );
};

export default app;
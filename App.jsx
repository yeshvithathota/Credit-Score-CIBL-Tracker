import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Score from "./pages/Score";
import Report from "./pages/Report";
import Loan from "./pages/Loan";
import Tips from "./pages/Tips";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/score" element={<Score />} />
        <Route path="/report" element={<Report />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
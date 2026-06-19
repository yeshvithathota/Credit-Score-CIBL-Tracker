import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2>CIBIL Tracker</h2>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/score">Score</Link>
        <Link to="/report">Report</Link>
        <Link to="/loan">Loan</Link>
        <Link to="/tips">Tips</Link>
      </div>
    </nav>
  );
}

export default Navbar;
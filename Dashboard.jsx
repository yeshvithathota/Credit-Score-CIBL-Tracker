import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h2>Credit Score</h2>
            <h1>762</h1>
            <p>Excellent</p>
          </div>

          <div className="card">
            <h2>Loan Eligibility</h2>
            <p>Eligible</p>
          </div>

          <div className="card">
            <h2>Credit Utilization</h2>
            <p>28%</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
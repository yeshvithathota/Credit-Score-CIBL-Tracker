import Navbar from "../components/Navbar";

function Report() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>CIBIL Report</h1>

        <ul>
          <li>Payment History : 92%</li>
          <li>Credit Utilization : 74%</li>
          <li>Credit Age : 81%</li>
          <li>Credit Mix : 68%</li>
          <li>New Inquiries : 55%</li>
        </ul>
      </div>
    </>
  );
}

export default Report;
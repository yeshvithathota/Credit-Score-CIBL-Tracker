import Navbar from "../components/Navbar";

function Loan() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Loan Eligibility</h1>

        <p>✔ Home Loan</p>
        <p>✔ Car Loan</p>
        <p>✔ Personal Loan</p>
        <p>✖ Business Loan</p>
      </div>
    </>
  );
}

export default Loan;
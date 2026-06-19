import Navbar from "../components/Navbar";

function Tips() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Improvement Tips</h1>

        <ul>
          <li>Pay bills on time.</li>
          <li>Keep utilization below 30%.</li>
          <li>Avoid multiple loan applications.</li>
          <li>Maintain old accounts.</li>
        </ul>
      </div>
    </>
  );
}

export default Tips;
import Navbar from "../components/Navbar";

function Admin() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Admin Panel</h1>

        <p>Total Users : 250</p>
        <p>Total Reports : 500</p>
        <p>Pending Disputes : 12</p>
      </div>
    </>
  );
}

export default Admin;
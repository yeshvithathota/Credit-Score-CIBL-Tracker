import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Welcome to Credit Score & CIBIL Tracker</h1>

        <p>
          Monitor your credit score, analyze reports and improve your
          financial health.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Home;
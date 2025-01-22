import React from "react";
import Navibar from "./Navibar";

function Dashboard() {
  return (
    <>
      <Navibar />

      <section className="custom-gradient-section shadow-lg ">
  <div className="container-fluid w-100 text-center text-white p-5">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="display-4 fw-bold">Welcome!</h1>
        <p className="fs-4 fw-light">
          This platform offers the fastest, most reliable, and secure solution for managing your bill payments, including electricity, water, internet, mobile recharge, and cable TV subscriptions.
        </p>
      </div>
    </div>
  </div>
</section>


<section>
  <div className="container bg-success text-white mt-3 shadow shadow-lg rounded rounded-3 py-5">
    <div className="row g-4">
      <div className="col-lg-6 col-md-6">
        <div className="  ">
          <h4>Available balance:</h4>
          <h2 className="fs-larger  fw-bold">$ 20000</h2>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="  text-end">
          <h3>Transaction history &gt; </h3>
          <p className="me-5 btn btn-outline-light">Fund wallet</p>
        </div>
      </div>
    </div>
  </div>
</section>


<main className="dashboard-section">
  <div className="container py-5">
    <div className="row g-4">
      <div className="col-lg-4 col-md-6">
        <div className="grid-item p-4 text-center">
          <h3>Card 1</h3>
          <p>Content for card 1.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="grid-item p-4 text-center">
          <h3>Card 2</h3>
          <p>Content for card 2.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="grid-item p-4 text-center">
          <h3>Card 3</h3>
          <p>Content for card 3.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="grid-item p-4 text-center">
          <h3>Card 4</h3>
          <p>Content for card 4.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="grid-item p-4 text-center">
          <h3>Card 5</h3>
          <p>Content for card 5.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="grid-item p-4 text-center">
          <h3>Card 6</h3>
          <p>Content for card 6.</p>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  );
}

export default Dashboard;

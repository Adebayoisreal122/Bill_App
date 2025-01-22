import React from "react";
import Navibar from "./Navibar";

function Dashboard() {
  return (
    <>
      <Navibar />

      <section className="custom-gradient-section">
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


      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Dashboard</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;

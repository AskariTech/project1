import React, { useState, useEffect } from "react";
import "../Style/Events.css";

const Events = () => {
  return (
    <div className="">
      <div className="bg-dark p-5" style={{ height: "100vh",textAlign:'center' }}>
        <h1 className="text-warning mt-5"> welcome bonus</h1>

        <p className="text-white">
          New members can get rewards when renewing for the first time
        </p>
        <p className="text-white mt-5">
        <span class="badge bg-warning">1</span> Renew for RM100 and get RM10
        </p>
        <p className="text-white">
        <span class="badge bg-warning mt-5">2</span> Renew for RM300 and get RM30 
        </p>
        <p className="text-white">
        <span class="badge bg-warning mt-5">3</span> Renew
          for RM500 and get RM50
        </p>
      </div>
    </div>
  );
};

export default Events;

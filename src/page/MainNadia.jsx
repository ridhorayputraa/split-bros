import React from "react";

function MainNadia() {
  return (
    <>
      <div>
        <p>Hello, nadia</p>
        <h3>Split your bill with Bros</h3>
      </div>
      <div style={{ backgroundColor: "black", padding: "1rem", width: "240px" }}>
        <p>Today Spending (personal)</p> <br />
        <p>Rp 20.000</p>
      </div>

      <button style={{ marginTop: "16px" }}>Lets split!</button>
      <div>
      <p>History (24 Hours)</p>
      </div>
    </>
  );
}

export default MainNadia;

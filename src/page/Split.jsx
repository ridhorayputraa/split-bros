import React from "react";

function Split() {
  return (
    <>
      <button>back</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="merchant">Let me Know what you buy!</label>
        <input id="merchant" placeholder="Gacoan" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="merchant">Let me Know what you buy!</label>
        <input
          readOnly
          style={{ height: "128px" }}
          id="merchant"
          placeholder="Rp 12.000"
        />
      </div>
    </>
  );
}

export default Split;

import React from "react";

function Split() {
  return (
    <>
      <button>back</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="merchant">Let me Know what you buy!</label>
        <input 
          readOnly
          style={{ height: "25px" }}
          id="merchant"/>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="merchant">How Many Bros </label>
        <input
          readOnly
          style={{ height: "25px" }}
          id="merchant" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="merchant">Bill your bros 1 </label>
        <input
          readOnly
          style={{ height: "25px" }}
          id="merchant" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="merchant">Bill your bros 2 </label>
        <input
          readOnly
          style={{ height: "25px" }}
          id="merchant" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="merchant">Bill your bros 3 </label>
        <input
          readOnly
          style={{ height: "25px" }}
          id="merchant" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="merchant">Bill your bros 4 </label>
        <input
          readOnly
          style={{ height: "25px" }}
          id="merchant" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="merchant">Total bill </label>
        <input
          readOnly
          style={{ height: "128px" }}
          id="merchant" />
      </div>
    <button>Submit</button>
    </>
  );
}

export default Split;

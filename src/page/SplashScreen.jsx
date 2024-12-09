import React from "react";
import gambarRumah from "../../public/gambar-rumah.png";

function SplashScreen() {
  return (
    <>
      <div>
        <h3 style={{fontSize: "15px", fontWeight: "400"}}>Welcome To</h3>
        <h1 style={{fontSize: "25px"}}>SplitBros</h1>
      </div>
      <div style={{marginTop: "20px"}}>SplashScreen</div>
      <img src={gambarRumah} alt="" />

      <div style={{ display: "flex", flexDirection: "column", width: "500px" }}>
        <label htmlFor="merchant">Let me Know your name</label>
        <input id="merchant"/>
      </div>
      <button style={{ marginTop: "16px", width: "500px", color: "black", backgroundColor: "green" }}>Submit</button>
      
    </>
  );
}

export default SplashScreen;

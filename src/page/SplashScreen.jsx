import React from "react";
import gambarRumah from "../../public/gambar-rumah.png";

function SplashScreen() {
  return (
    <>
      <div style={{display: "flex", justifyContent: "center"}}>
        <h3 style={{fontSize: "15px"}}>Welcome To</h3>
        <h1 style={{fontSize: "25px"}}>SplitBros</h1>
      </div>
      <div style={{marginTop: "20px"}}>SplashScreen</div>
      <img src={gambarRumah} alt="" />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="merchant">Let me Know your name</label>
        <input id="merchant"/>
      </div>
      <button style={{ marginTop: "16px", width: "50px", color: "green" }}>Submit</button>
      
    </>
  );
}

export default SplashScreen;

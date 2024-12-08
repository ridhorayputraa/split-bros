import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Split from "./page/Split";
import SplashScreen from "./page/SplashScreen";
import MainNadia from "./page/MainNadia";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainKaffa />
    </>
  );
}

export default App;

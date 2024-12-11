import { AnimatePresence } from "framer-motion";
import React, { Suspense, useLayoutEffect } from "react";
import Transitions from "./component/Transitions";
// import SplashScreen from "./page/SplashScreen";
import { useLocation, useRoutes } from "react-router";

const SplashScreen = React.lazy(() => import("./page/SplashScreen"));
const Dashboard = React.lazy(() => import("./page/Dashboard"));
const Split = React.lazy(() => import("./page/Split"));

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const element = useRoutes([
    {
      path: "/",
      element: <SplashScreen />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/split",
      element: <Split />,
    },
  ]);

  if (!element) return null;

  return (
    <Suspense
      fallback={
        <AnimatePresence mode="wait">
          <Transitions />
        </AnimatePresence>
      }
    >
      <AnimatePresence mode="wait" initial={true}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </Suspense>
  );
}

export default App;

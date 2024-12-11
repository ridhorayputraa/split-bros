import { motion } from "framer-motion";
import React from "react";

function Transitions({ children }) {
  return (
    <motion.div
      className="privacy-screen"
      initial={{
        opacity: 0,
        scale: 1,
        height: "100%",
        z: 100000,
        rotateY: 0,
        // z: 100000,
        transition: {
          duration: 0.5,
          ease: "linear",
          delay: 0.6,
        },
      }}
      animate={{
        opacity: 1,
        scale: 1,
        height: "100%",

        // rotateY: 10000,
        z: 100000,
        transition: {
          duration: 0.5,
          ease: "linear",
          delay: 0.6,
        },
      }}
      exit={{
        opacity: 0,
        scale: 4,
        height: "100%",
        z: 100000,
        transition: {
          duration: 0.5,
          ease: "linear",
          delay: 0.6,
        },
      }}
      style={{ zIndex: 1000, opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}

// </AnimatePresence>
//         <AnimatePresence mode="wait">
export default Transitions;

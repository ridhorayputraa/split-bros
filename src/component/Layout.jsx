import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <motion.section
      className="section-sb"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.section>
  );
};

export default Layout;

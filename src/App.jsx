import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

import logo from "./assets/logo.svg";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  document.body.style.overflow = "hidden";

  const minimumTime = new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );

  const pageLoaded = new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve();
    } else {
      window.addEventListener("load", resolve, {
        once: true,
      });
    }
  });

  Promise.all([
    minimumTime,
    pageLoaded,
  ]).then(() => {
    setLoading(false);
    document.body.style.overflow = "auto";
  });

  return () => {
    document.body.style.overflow = "auto";
  };
}, []);


  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader-wrapper">

          <div className="loader-glow" />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
            }}
            className="loader-ring"
          />

          <motion.img
            src={logo}
            alt="Logo"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="loader-logo"
          />

          <motion.p
            animate={{
              opacity: [0.3, 1, 0.3],
              y: [0, -3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
            className="loader-text"
          >
            MEMUAT PRODUK...
          </motion.p>

        </div>
      </div>
    );
  }

  return (
    <>
      <AppRouter />

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
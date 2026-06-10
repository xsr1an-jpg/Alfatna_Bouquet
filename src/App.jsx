import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

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
        window.addEventListener(
          "load",
          resolve,
          {
            once: true,
          }
        );
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

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="loader-screen"
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="loader-wrapper">

              <motion.img
                src={logo}
                alt="Logo"
                className="loader-logo"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  scale: 1.8,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              />

              <div className="loader-progress">
                <motion.div
                  className="loader-progress-fill"
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                  }}
                />
              </div>

            </div>
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
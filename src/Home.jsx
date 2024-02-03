import React, { useEffect } from "react";
import { m, LazyMotion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Home.css";
const loadFeatures = () =>
  import("./features").then((response) => response.default);

function Home({ setCoverAnimationProgress }) {
  useEffect(() => {
    setTimeout(() => {
      setCoverAnimationProgress(false);
    }, 8000);
  }, []);

  return (
    <LazyMotion features={loadFeatures} strict>
      <m.div
        className="coverpage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <m.div className="coverpage__message">
          <m.h1
            animate={{
              opacity: [1, 0],
              transition: {
                delay: 11,
                duration: 0.5,
              },
            }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1300)
                  .typeString("Hi there!")
                  .pauseFor(800)
                  .deleteAll()
                  .typeString("Welcome to ECES 😊")
                  .pauseFor(3000)
                  .start();
              }}
              options={{
                delay: 100, // Adjust the overall delay
              }}
            />
          </m.h1>
        </m.div>
      </m.div>
    </LazyMotion>
  );
}

export default Home;

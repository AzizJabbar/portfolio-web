import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const FadeInOnScroll = ({ children, delay = 0, direction = "down" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const elementRef = React.createRef();

  const handleScroll = () => {
    const element = elementRef.current;
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        x: direction === "left" ? 0 : direction === "right" ? 0 : null,
        y: direction === "up" ? 0 : direction === "down" ? 0 : null,
        transition: { delay, duration: 2, type: "spring" },
      });
    }
    // else {
    //   if (direction === "up") {
    //     controls.start({ opacity: 0, y: 150 });
    //   } else if (direction === "down") {
    //     controls.start({ opacity: 0, y: -150 });
    //   } else if (direction === "left") {
    //     controls.start({ opacity: 0, x: 150 });
    //   } else if (direction === "right") {
    //     controls.start({ opacity: 0, x: -150 });
    //   }
    // }
  }, [isVisible, controls, delay, direction]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -150 : direction === "right" ? 150 : null,
        y: direction === "up" ? -150 : direction === "down" ? 150 : null,
      }}
      animate={controls}
      ref={elementRef}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;

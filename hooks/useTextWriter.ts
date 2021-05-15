import React, { useEffect, useState, useRef } from "react";

const iam = [
  "Software Engineer...",
  "Learner...",
  "Tech Enthusiast...",
  "Table Tennis Enthusiast...",
  "Nature Lover...",
];

export default function useTextWriter() {
  const [subTitle, setSubtitle] = useState("");

  const textIndex = useRef(0);
  const currentText = useRef(iam[textIndex.current]);
  const currentSubtitle = useRef("");
  const directionForward = useRef(true);
  const position = useRef(0);

  useEffect(() => {
    let fn = () => {
      if (directionForward.current) {
        position.current = position.current + 1;
        if (currentSubtitle.current.length >= currentText.current.length) {
          directionForward.current = false;

          setTimeout(fn, 1000);
        } else {
          setTimeout(fn, 180);
        }
      } else {
        position.current = position.current - 1;
        if (currentSubtitle.current.length <= 0) {
          directionForward.current = true;
          textIndex.current = textIndex.current + 1;
          if (textIndex.current >= iam.length) {
            textIndex.current = 0;
          }
          currentText.current = iam[textIndex.current];
          position.current = 0;
          setTimeout(fn, 300);
        } else setTimeout(fn, 40);
      }
      currentSubtitle.current = currentText.current.slice(0, position.current);
      setSubtitle(currentSubtitle.current);
    };

    let tick = setTimeout(fn, 80);

    // let interval = setInterval(() => {
    //   if (directionForward.current) {
    //     position.current = position.current + 1;
    //     if (currentSubtitle.current.length >= currentText.current.length) {
    //       directionForward.current = false;
    //     }
    //   } else {
    //     position.current = position.current - 1;
    //     if (currentSubtitle.current.length <= 0) {
    //       directionForward.current = true;
    //       currentText.current = iam[Math.floor(Math.random() * iam.length)];
    //       position.current = 0;
    //     }
    //   }
    //   currentSubtitle.current = currentText.current.slice(0, position.current);
    //   setSubtitle(currentSubtitle.current);
    // }, 80);

    return () => {
      // clearInterval(interval);
      clearTimeout(tick);
    };
  }, []);

  return currentSubtitle.current;
}

"use client";
import { TunisContext } from "@/context/context";
import useWindowSize from "@/utility/useWindowSize";
import { useContext, useEffect, useState } from "react";

const Revealer = () => {
  const { nav, direction } = useContext(TunisContext);
  const [navClass, setNavClass] = useState("");
  const { width, height } = useWindowSize();
  useEffect(() => {
    setTimeout(() => {
      setNavClass(`revealer--${direction} revealer--animate opacity-100`);
    }, 100);
    setTimeout(() => {
      setNavClass("");
    }, 1500);
  }, [nav]);
  const directionStyle = (direction) => {
    const pageDiagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    switch (direction) {
      case "cornertopleft":
        return {
          width: pageDiagonal,
          height: pageDiagonal,
          transform: `translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, 135deg) translate3d(0px, ${pageDiagonal}px, 0px)`,
        };

      case "top":
        return {
          width: "100vw",
          height: "100vh",
          transform: "rotate3d(0, 0, 1, 180deg)",
        };

      case "cornertopright":
        return {
          width: pageDiagonal,
          height: pageDiagonal,
          transform: `translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, -135deg) translate3d(0px, ${pageDiagonal}px, 0px)`,
        };

      case "left":
        return {
          width: "100vh",
          height: "100vw",
          transform:
            "translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, 90deg) translate3d(0px, 100%, 0px)",
        };

      case "right":
        return {
          width: "100vh",
          height: "100vw",
          transform:
            "translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, -90deg) translate3d(0px, 100%, 0px)",
        };

      case "cornerbottomleft":
        return {
          width: pageDiagonal,
          height: pageDiagonal,
          transform: `translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, 45deg) translate3d(0px, ${pageDiagonal}px, 0px)`,
        };

      case "bottom":
        return {
          width: "100vw",
          height: "100vh",
          transform: "none",
        };

      case "cornerbottomright":
        return {
          width: pageDiagonal,
          height: pageDiagonal,
          transform: `translate3d(-50%, -50%, 0px) rotate3d(0, 0, 1, -45deg) translate3d(0px, ${pageDiagonal}px, 0px)`,
        };

      default:
        return {
          width: "100vw",
          height: "100vh",
          transform: "rotate3d(0, 0, 1, 180deg)",
        };
    }
  };
  return (
    <div className={`revealer ${navClass}`} style={directionStyle(direction)}>
      <div style={{ background: "#eee" }} className="revealer__layer" />
      <div style={{ background: "#ffff00" }} className="revealer__layer" />
      <div style={{ background: "#eee" }} className="revealer__layer" />
    </div>
  );
};
export default Revealer;

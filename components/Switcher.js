"use client";
import { TunisContext } from "@/context/context";
import { useContext, useState } from "react";
const colors = [
  { id: 1, name: "purple", img: "purple" },
  { id: 2, name: "red", img: "red" },
  { id: 3, name: "blueviolet", img: "blueviolet" },
  { id: 4, name: "blue", img: "blue" },
  { id: 5, name: "goldenrod", img: "goldenrod" },
  { id: 6, name: "magenta", img: "magenta" },
  { id: 7, name: "yellowgreen", img: "yellowgreen" },
  { id: 8, name: "orange", img: "orange" },
  { id: 9, name: "green", img: "green" },
  { id: 10, name: "yellow", img: "yellow" },
];

const directions = [
  {
    id: 1,
    name: "top",
    items: [
      { id: 1, name: "cornertopleft" },
      { id: 2, name: "top" },
      { id: 3, name: "cornertopright" },
    ],
  },
  {
    id: 2,
    name: "center",
    items: [
      { id: 4, name: "left" },
      { id: 5, name: "right" },
    ],
  },
  {
    id: 3,
    name: "bottom",
    items: [
      { id: 6, name: "cornerbottomleft" },
      { id: 7, name: "bottom" },
      { id: 8, name: "cornerbottomright" },
    ],
  },
];

const Switcher = () => {
  const [toggle, setToggle] = useState(false);
  const { changeColor, changeDirection, direction } = useContext(TunisContext);
  return (
    <div className={`switcher_container ${toggle ? "switch_open" : ""}`}>
      <div id="switcher">
        <div className="content-switcher">
          <h4>COLOR SWITCHER</h4>
          <ul>
            {colors.map((color) => (
              <li key={color.id}>
                <a
                  href="#"
                  title={color.name}
                  className="color"
                  onClick={() => changeColor(color.name)}
                >
                  <img
                    src={`assets/img/styleswitcher/${color.img}.png`}
                    alt={color.name}
                  />
                </a>
              </li>
            ))}
          </ul>
          <h4>TRANSITION DIRECTION</h4>
          {directions.map((direction_) => (
            <div
              className="flex justify-between transition-direction"
              key={direction_.id}
            >
              {direction_.items.map((item) => (
                <div
                  id={item.name}
                  key={item.id}
                  onClick={() => changeDirection(item.name)}
                  className={`cursor-pointer ${
                    item.name == direction ? "active" : ""
                  }`}
                >
                  <div className={`arrow ${item.name}`} />
                </div>
              ))}
            </div>
          ))}
          <span>Navigate between sections to see the effect.</span>
          <div id="hideSwitcher" onClick={() => setToggle(false)}>
            ×
          </div>
        </div>
      </div>
      <div
        id="showSwitcher"
        className="styleSecondColor cursor-pointer"
        onClick={() => setToggle(true)}
      >
        <i className="fa fa-cog fa-spin" />
      </div>
    </div>
  );
};
export default Switcher;

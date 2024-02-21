"use client";
import "@css/demo.css";
import { Fragment } from "react";
const page = () => {
  return (
    <Fragment>
      <div className="header">
        <h1>Tunis</h1>
        <h2>Tailwind CSS Personal Portfolio React NextJS Template</h2>
      </div>
      <svg
        id="separator"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height={100}
        viewBox="0 0 100 102"
        preserveAspectRatio="none"
      >
        <path d="M0 0 L50 100 L100 0 Z" />
      </svg>
      <div className="items">
        <div>
          <a href="/" target="_blank">
            <img src="assets/img/demo/dark.jpg" alt="img" />
            <span>Dark</span>
          </a>
        </div>
        <div>
          <a href="/light" target="_blank">
            <img src="assets/img/demo/light.jpg" alt="img" />
            <span>Light</span>
          </a>
        </div>
      </div>
      <div className="footer">
        Designed with <span className="heart">❤</span> by{" "}
        <a target="_blank" href="http://themeforest.net/user/Codeefly/">
          Codeefly
        </a>
      </div>
    </Fragment>
  );
};
export default page;

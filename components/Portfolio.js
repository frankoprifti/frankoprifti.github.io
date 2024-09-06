"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    id: 1,
    title: "FITSQD",
    type: "img",
    src: "",
    img: "assets/img/projects/fitsqd.png",
    project: "Mobile Application",
    client: "FITSQD",
    langages: "React Native",
    previewLink: "play.google.com/store/apps/details?id=com.sqd",
  },
  {
    id: 2,
    title: "Parlament.al",
    type: "img",
    src: "",
    img: "assets/img/projects/parlament.png",
    project: "Website",
    client: "Parlament",
    langages: "React",
    previewLink: "www.parlament.al",
  },
  {
    id: 3,
    title: "Rista Group",
    type: "img",
    src: "",
    img: "assets/img/projects/ristagroup.png",
    project: "Website",
    client: "Rista Group",
    langages: "React (Next.js)",
    previewLink: "www.ristagroup.org",
  },
  {
    id: 4,
    title: "Arden-Net",
    type: "img",
    src: "",
    img: "assets/img/projects/arden-net.png",
    project: "Website",
    client: "Arden Net",
    langages: "HTML, CSS, Javascript",
    previewLink: "arden-net.netlify.app",
  },
  {
    id: 5,
    title: "Internet Infinity",
    type: "img",
    src: "",
    img: "assets/img/projects/infinity.png",
    project: "Website",
    client: "Internet Infinity",
    langages: "HTML, CSS, Javascript",
    previewLink: "infinityisp.al",
  },
  {
    id: 6,
    title: "Horizont Labs",
    type: "img",
    src: "",
    img: "assets/img/projects/horizont.png",
    project: "Website",
    client: "Horizont Labs",
    langages: "React, Firebase, Wordpress API",
    previewLink: "horizontlabs.com",
  },
  {
    id: 7,
    title: "Pokemon UI",
    type: "img",
    src: "",
    img: "assets/img/projects/pokemon.gif",
    project: "Website",
    client: "Personal",
    langages: "Next.js, React, CSS Animations, JS DOM Manipulation",
    previewLink: "pokemon-ui5.vercel.app/",
  },
  {
    id: 8,
    title: "Dibbery Landing Page",
    type: "img",
    src: "",
    img: "assets/img/projects/dibbery-landing.png",
    project: "Website",
    client: "Horizont Labs",
    langages: "React",
    previewLink: "dibbery.co.uk",
  },
  {
    id: 9,
    title: "iiNDYVERSE Artist Console",
    type: "img",
    src: "",
    img: "assets/img/projects/iindy-console.gif",
    project: "Web Application",
    client: "iiNDYVERSE",
    langages: "React",
    previewLink: "demo.iindy.co",
  },
  {
    id: 10,
    title: "iiNDYVERSE Artist Landing",
    type: "img",
    src: "",
    img: "assets/img/projects/iindy-artist-landing.png",
    project: "Web Application",
    client: "iiNDYVERSE",
    langages: "React",
    previewLink: "tommisch.iindy.co",
  },
  {
    id: 11,
    title: "iiNDYVERSE Claim Collection & Wallet",
    type: "img",
    src: "",
    img: "assets/img/projects/iindy-collectible.png",
    project: "Web Application",
    client: "iiNDYVERSE",
    langages: "Next.js",
    previewLink: "demo.api.iindy.co/c/cKv4qYK",
  },
  {
    id: 12,
    title: "Movienator Web",
    type: "img",
    src: "",
    img: "assets/img/projects/movienator-web.png",
    project: "Web Application",
    client: "Personal",
    langages: "Flutter",
    previewLink: "movienator.github.io",
  },
  {
    id: 13,
    title: "Movienator Mobile",
    type: "img",
    src: "",
    img: "assets/img/projects/movienator-mobile.png",
    project: "Mobile Application",
    client: "Personal",
    langages: "Flutter",
    previewLink: "frankoprifti.itch.io/movienator",
  },
  {
    id: 14,
    title: "Tech News",
    type: "img",
    src: "",
    img: "assets/img/projects/tech-news.png",
    project: "Mobile Application",
    client: "Personal",
    langages: "Flutter, Wordpress API",
    previewLink: "play.google.com/store/apps/details?id=com.franko.tech_news",
  },
  {
    id: 15,
    title: "Payment Tracker",
    type: "img",
    src: "",
    img: "assets/img/projects/payment-tracker.png",
    project: "Mobile Application",
    client: "Personal",
    langages: "Flutter, Wordpress API",
    previewLink: "play.google.com/store/apps/details?id=com.payment_tracker.franko",
  },
  {
    id: 16,
    title: "Frassistant",
    type: "img",
    src: "",
    img: "assets/img/projects/frassistant.png",
    project: "Web Application",
    client: "Personal",
    langages: "P5.js, Javascript, TTS API",
    previewLink: "frassistant-fp.netlify.app",
  },
  {
    id: 17,
    title: "Infinit Net",
    type: "img",
    src: "",
    img: "assets/img/projects/infinit-net.png",
    project: "Website",
    client: "Infinit Net",
    langages: "HTML, CSS, Javascript",
    previewLink: "infinit-net.al",
  },
  {
    id: 19,
    title: "Experience Finder",
    type: "img",
    src: "",
    img: "assets/img/projects/experience-finder.png",
    project: "Mobile Application",
    client: "TechFest Albania, Hackathon Winner",
    langages: "Flutter, Figma",
    previewLink: "github.com/erginushi/experience_finder",
  },
  {
    id: 20,
    title: "Punesohu (Web App)",
    type: "img",
    src: "",
    img: "assets/img/projects/punesohu.png",
    project: "Web App",
    client: "Personal (WIP)",
    langages: "React, Firebase",
    previewLink: "punesohu.web.app/",
  },
  {
    id: 21,
    title: "Bicycle Speedo",
    type: "img",
    src: "",
    img: "assets/img/projects/bicycyle-app.png",
    project: "Mobile Application",
    client: "Personal",
    langages: "Flutter, Figma",
    previewLink: "gitlab.com/frankoprifti/bicycle_app",
  },
  {
    id: 22,
    title: "Innoscripta News Aggregator",
    type: "img",
    src: "",
    img: "assets/img/projects/innoscripta.jpg",
    project: "Web App",
    client: "Personal",
    langages: "Next.js, NextUI",
    previewLink: "https://innoscripta-task.vercel.app/",
  },
  {
    id: 23,
    title: "Building Spares",
    type: "img",
    src: "",
    img: "assets/img/projects/bs.jpg",
    project: "Web App",
    client: "Building Spares",
    langages: "Next.js, React",
    previewLink: "https://buildingspares.netlify.app/",
  },
  {
    id: 24,
    title: "Fitness App",
    type: "img",
    src: "",
    img: "assets/img/projects/fitnessapp.gif",
    project: "Mobile App",
    client: "Onemor",
    langages: "React Native, Expo",
    previewLink: "https://github.com/frankoprifti/fitness-app",
  },
];


const Portfolio = () => {
  const { popupToggle } = useContext(TunisContext);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"works"}
          colorTitle={"portfolio"}
          normalTitle={"my"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-black-1">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;

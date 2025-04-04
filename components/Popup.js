import { TunisContext } from "@/context/context";
import { useContext } from "react";

const Popup = () => {
  const { popup, popupToggle, dark } = useContext(TunisContext);
  return (
    <div className="portfolio">
      <div className="slideshow-open">
        <div className="slideshow bg-black">
          <figure
            className={`popup_figure bg-${dark ? "black-3" : "white"
              } p-30 overflow-auto rounded-10`}
          >
            {/* Project Details Starts */}
            <figcaption className="mb-15">
              <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                {popup.title}
              </h3>
              <div className="flex flex-wrap font-Open-sans text-fs-15">
                <div className="w-1/2 xs:w-full mb-8">
                  <i className="fa fa-file-text-o pr-8" />
                  <span className="project-label">Project </span>:{" "}
                  <span className="font-semibold">{popup.project}</span>
                </div>
                <div className="w-1/2 xs:w-full mb-8">
                  <i className="fa fa-user-o pr-8" />
                  <span className="project-label">Client </span>:{" "}
                  <span className="font-semibold">{popup.client}</span>
                </div>
                <div className="w-1/2 xs:w-full mb-8">
                  <i className="fa fa-code pr-8" />
                  <span className="project-label">Langages </span>:{" "}
                  <span className="font-semibold">{popup.langages}</span>
                </div>
                <div className="w-1/2 xs:w-full mb-8">
                  <i className="fa fa-external-link pr-8" />
                  <span className="project-label">Preview </span>:{" "}
                  <span className="font-semibold">
                    <a
                      className="underline text-accent"
                      href={`https://${popup.previewLink}`}
                      target="_blank"
                    >
                      {popup.previewLink}
                    </a>
                  </span>
                </div>
              </div>
            </figcaption>
            {/* Project Details Ends */}
            {/* Main Project Content Starts */}
            {popup.type == "local_video" ? (
              <video
                id="video"
                className="responsive-video"
                controls
                poster={popup.img}
              >
                <source src={popup.src} type="video/mp4" />
              </video>
            ) : popup.type == "youtube" ? (
              <div className="videocontainer">
                <iframe
                  className="youtube-video"
                  src={popup.src}
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                className="block w-full rounded-5 object-contain"
                src={popup.img}
                alt="Portolio Image"
                style={{ maxHeight: 400, objectFit: 'contain' }}
              />
            )}

            {/* Main Project Content Ends */}
          </figure>
          {/* Portfolio Navigation Starts */}
          <nav className="down-lg:fixed down-lg:top-0 down-lg:w-full down-lg:h-102 down-lg:bg-black-3 down-lg:z-10 down-lg:border-b down-lg:border-solid down-lg:border-b-black-4 xs:h-62">
            <span
              onClick={() => popupToggle(null)}
              className="nav-close fixed cursor-pointer from-lg:top-30 down-lg:top-35 from-lg:right-30 down-lg:left-0 down-lg:right-0 down-lg:mx-auto down-lg:block down-lg:w-32 xs:w-20 xs:top-21"
            >
              <img
                className="block"
                src="assets/img/projects/navigation/close-button.png"
                alt="close"
              />{" "}
            </span>
          </nav>
          {/* Portfolio Navigation Ends */}
        </div>
      </div>
    </div>
  );
};
export default Popup;

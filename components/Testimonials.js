"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { tunisUtility } from "@/utility";
import { Fragment, useContext, useEffect, useState } from "react";
import BlogDetails from "./BlogDetails";
import SectionTitle from "./SectionTitle";
import TestimonialDetails from "./TestimonialDetails";

const Testimonials = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    tunisUtility.pagination(".testimonials-list-item", sort, active);
    let list = document.querySelectorAll(".testimonials-list-item");
    setstate(tunisUtility.getPagination(list.length, sort));
  }, [active]);
  const { blogs, changeNav, dark, testimonials } = useContext(TunisContext);

  const [testimonialDetailsData, setBlogDetailsData] = useState(null);

  return (
    <Fragment>
      <SectionContainer id={"testimonials"}>
        <div className="w-full">
          {/* Section Title Starts */}
          <SectionTitle
            bigTitle={"Clients"}
            colorTitle={"Testimonials"}
            normalTitle={""}
          />
          {/* Section Title Ends */}
          <div className="xl:max-w-1140 lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
            {/* testimonials Posts Starts */}
            <div className="flex flex-wrap down-sm:flex-col">
              {/* testimonials Post Starts */}
              {testimonials.map((testimonials) => (
                <div
                  key={testimonials.id}
                  className="w-1/3 down-xl:w-1/2 down-sm:w-full px-16 xs:px-0 mb-30 testimonials-list-item"
                >
                  <div
                    className={`h-full bg-${dark ? "black-3" : "light-grey-3"
                      } rounded-5`}
                  >
                    <div className="rounded-t-5 cursor-pointer post-thumb">
                      <a
                        // href="#"
                        onClick={() => {
                          // setBlogDetailsData(testimonials);
                          // changeNav("testimonials-details");
                        }}
                        className="rounded-t-5 relative overflow-hidden block group outline-0 transition-all duration-300"
                      >
                        <img
                          className="rounded-t-5 transition-all duration-300 group-hover:scale-125"
                          src={testimonials.img}
                          alt=""
                        />
                      </a>
                    </div>
                    <div
                      className={`bg-${dark ? "black-3" : "light-grey-3"
                        } pt-20 px-25 pb-25 rounded-b-5`}
                    >
                      <a
                        // href="#"
                        onClick={() => {
                          // setBlogDetailsData(testimonials);
                          // changeNav("testimonials-details");
                        }}
                        className="leading-lh-26 text-fs-20 font-semibold text-accent-hover transition duration-300"
                      >
                        {testimonials.title}
                      </a>
                      <p className="mt-15 mb-5 font-Open-sans">
                        {testimonials.desc.slice(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* testimonials Post Ends */}
            </div>
            {/* testimonials Posts Ends */}
            {/* testimonials Pagination Starts */}
            <nav className="mt-24">
              <ul className="flex justify-center from-sm:mb-100 down-sm:mb-60">
                {state &&
                  state.map((s, i) => (
                    <li key={i} className={`${active === s ? "active" : ""}`}>
                      <a
                        className={`w-43 h-43 transition-all duration-300 text-center block leading-lh-45 bg-accent-hover rounded-full mx-5
                        ${dark ? "hover:text-black-1" : "bg-light-grey hover:text-black-1"}
                        ${active === s ? "bg-accent text-black-1" : "bg-black-3"
                          }`}
                        // href="#"
                        onClick={(e) => {
                          // e.preventDefault();
                          // setActive(s);
                        }}
                      >
                        {s}
                      </a>
                    </li>
                  ))}
              </ul>
            </nav>
            {/* testimonials Pagination Ends */}
          </div>
        </div>
      </SectionContainer>
      {/* {testimonialDetailsData && <TestimonialDetails testimonials={testimonialDetailsData} />} */}
    </Fragment>
  );
};
export default Testimonials;

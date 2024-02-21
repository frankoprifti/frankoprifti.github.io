"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { tunisUtility } from "@/utility";
import { Fragment, useContext, useEffect, useState } from "react";
import BlogDetails from "./BlogDetails";
import SectionTitle from "./SectionTitle";

const Blog = () => {
  let sort = 3;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    tunisUtility.pagination(".blog-list-item", sort, active);
    let list = document.querySelectorAll(".blog-list-item");
    setstate(tunisUtility.getPagination(list.length, sort));
  }, [active]);
  const { blogs, changeNav, dark } = useContext(TunisContext);

  const [blogDetailsData, setBlogDetailsData] = useState(null);

  return (
    <Fragment>
      <SectionContainer id={"blog"}>
        <div className="w-full">
          {/* Section Title Starts */}
          <SectionTitle
            bigTitle={"posts"}
            colorTitle={"blog"}
            normalTitle={"my"}
          />
          {/* Section Title Ends */}
          <div className="xl:max-w-1140 lg:max-w-960 md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto">
            {/* Blog Posts Starts */}
            <div className="flex flex-wrap down-sm:flex-col">
              {/* Blog Post Starts */}
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="w-1/3 down-xl:w-1/2 down-sm:w-full px-16 xs:px-0 mb-30 blog-list-item"
                >
                  <div
                    className={`h-full bg-${
                      dark ? "black-3" : "light-grey-3"
                    } rounded-5`}
                  >
                    <div className="rounded-t-5 cursor-pointer post-thumb">
                      <a
                        href="#"
                        onClick={() => {
                          setBlogDetailsData(blog);
                          changeNav("blog-details");
                        }}
                        className="rounded-t-5 relative overflow-hidden block group outline-0 transition-all duration-300"
                      >
                        <img
                          className="rounded-t-5 transition-all duration-300 group-hover:scale-125"
                          src={blog.img}
                          alt=""
                        />
                      </a>
                    </div>
                    <div
                      className={`bg-${
                        dark ? "black-3" : "light-grey-3"
                      } pt-20 px-25 pb-25 rounded-b-5`}
                    >
                      <a
                        href="#"
                        onClick={() => {
                          setBlogDetailsData(blog);
                          changeNav("blog-details");
                        }}
                        className="leading-lh-26 text-fs-20 font-semibold text-accent-hover transition duration-300"
                      >
                        {blog.title}
                      </a>
                      <p className="mt-15 mb-5 font-Open-sans">
                        {blog.desc.slice(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Blog Post Ends */}
            </div>
            {/* Blog Posts Ends */}
            {/* Blog Pagination Starts */}
            <nav className="mt-24">
              <ul className="flex justify-center from-sm:mb-100 down-sm:mb-60">
                {state &&
                  state.map((s, i) => (
                    <li key={i} className={`${active === s ? "active" : ""}`}>
                      <a
                        className={`w-43 h-43 transition-all duration-300 text-center block leading-lh-45 bg-accent-hover rounded-full mx-5
                        ${dark ? "" : "bg-light-grey hover:text-white"}
                        ${
                          active === s ? "bg-accent text-white" : "bg-black-3"
                        }`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(s);
                        }}
                      >
                        {s}
                      </a>
                    </li>
                  ))}
              </ul>
            </nav>
            {/* Blog Pagination Ends */}
          </div>
        </div>
      </SectionContainer>
      {blogDetailsData && <BlogDetails blog={blogDetailsData} />}
    </Fragment>
  );
};
export default Blog;

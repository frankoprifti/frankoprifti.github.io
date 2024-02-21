"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const BlogDetails = ({ blog }) => {
  const { dark } = useContext(TunisContext);
  return (
    <SectionContainer id={"blog-details"}>
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"posts"}
          colorTitle={"blog"}
          normalTitle={"my"}
        />
        {/* Section Title Ends */}
        <div className="mx-auto max-w-700 down-sm:px-25 xs:pt-85">
          <div
            className={`text-fs-13 text-${
              dark ? "light-grey" : "black-3"
            } font-Open-sans`}
          >
            <span className="pr-15">
              <i className="fa fa-user pr-3 text-accent" /> {blog.author}
            </span>
            <span className="pr-15">
              <i className="fa fa-calendar pr-3 text-accent" /> {blog.date}
            </span>
            <span className="pr-15">
              <i className="fa fa-tags pr-3 text-accent" /> {blog.tags}
            </span>
          </div>
          <h1 className="mt-13 mb-20 font-semibold capitalize text-fs-40 xs:text-fs-26 leading-lh-1.2">
            {blog.title}
          </h1>
          <img className="rounded-5 mb-20 w-full" src={blog.img} alt="img" />
          <div className="font-Open-sans mb-60">
            <p className="mb-32 leading-lh-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mb-32 leading-lh-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mb-32 leading-lh-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default BlogDetails;

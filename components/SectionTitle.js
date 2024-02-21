"use client";
import { TunisContext } from "@/context/context";
import { useContext } from "react";

const SectionTitle = ({ bigTitle, colorTitle, normalTitle }) => {
  const { dark } = useContext(TunisContext);
  return (
    <div className="mx-auto w-full relative py-80 text-center xs:px-25 xs:pt-16 xs:pb-14 xs:bg-black-3 xs:border-b xs:border-black-4 xs:fixed xs:left-0 xs:right-0 xs:top-0 xs:z-20">
      <h2
        className={`text-fs-56 font-black font-Poppins uppercase text-${
          dark ? "white" : "black-6"
        } m-0 xs:text-fs-26 xs:text-left xs:leading-lh-1.2`}
      >
        {normalTitle} <span className="text-accent">{colorTitle}</span>
      </h2>
      <span
        className={`text-fs-110 absolute left-0 right-0 top-1/2 tracking-10 leading-lh-0.7 font-extrabold text-${
          dark ? "muted" : "light-grey-2"
        } -translate-y-1/2 uppercase xs:hidden`}
      >
        {bigTitle}
      </span>
    </div>
  );
};
export default SectionTitle;

import { tunisUtility } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    tunisUtility.preloader();
  }, []);

  return (
    <div
      id="preloader"
      className="fixed z-100 group left-0 top-0 h-screen w-full flex justify-center items-center pointer-events-none before:absolute before:left-0 before:top-0 before:w-1/2 before:h-full before:bg-black-3 before:transition-all before:duration-300 after:absolute after:right-0 after:top-0 after:w-1/2 after:h-full after:bg-black-3 after:transition-all after:duration-300 [&.preloaded]:before:animate-finishanimation [&.preloaded]:after:animate-finishanimation"
    >
      <div className="line m-0 h-250 w-3 rounded-4 relative overflow-hidden transition-all duration-700 before:animate-animateline before:z-10 before:absolute before:left-0 before:top-1/2 before:w-3 before:h-0 before:-translate-y-1/2 after:animate-animatebgline after:absolute after:left-0 after:w-1 after:h-full after:bg-transparent after:-translate-y-full group-[.preloaded]:opacity-0 group-[.preloaded]:!h-full group-[.preloaded]:after:opacity-0" />
    </div>
  );
};
export default Preloader;

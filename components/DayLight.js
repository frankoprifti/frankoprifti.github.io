import { TunisContext } from "@/context/context";
import { useContext } from "react";

const DayLight = () => {
  const { darkToggle, dark } = useContext(TunisContext);
  return (
    <a
      href="#"
      className={`dark-switch social-item flex h-50 w-50 leading-lh-42 text-center transition duration-300 text-fs-20 mx-6 bg-${
        dark ? "black-2" : "light-grey"
      } rounded-full`}
      onClick={() => darkToggle(!dark)}
    >
      <i
        className={`${
          dark ? "fa fa-sun-o text-white" : "fa fa-moon-o text-black-6"
        } text-fs-20`}
      ></i>
    </a>
  );
};
export default DayLight;

"use client";
import { TunisContext } from "@/context/context";
import { useContext, useState } from "react";

const Header = () => {
  const menus = [
    { id: 1, title: "Home", href: "home", icon: "fa fa-home" },
    { id: 2, title: "About", href: "about", icon: "fa fa-user" },
    { id: 3, title: "Portfolio", href: "portfolio", icon: "fa fa-briefcase" },
    { id: 4, title: "Contact", href: "contact", icon: "fa fa-envelope-open" },
    // { id: 5, title: "Blog", href: "blog", icon: "fa fa-comments" },
  ];
  const { nav, changeNav, dark } = useContext(TunisContext);

  const [toggle, setToggle] = useState(false);

  return (
    <header
      className="header from-lg:fixed from-lg:right-30 from-lg:bottom-0 from-lg:z-30 from-lg:flex from-lg:items-center from-lg:h-[calc(100vh-200px)] from-lg:top-100 from-lg:opacity-100 from-lg:transition from-lg:duration-300 from-lg:[&.hide-header]:z-0 from-lg:[&.hide-header]:opacity-0"
      id="navbar-collapse-toggle"
    >
      {/* Fixed Desktop Navigation Starts */}
      <ul
        id="desktop-nav"
        className="icon-menu down-lg:hidden from-md:block uppercase"
      >
        {menus.map((menu) => (
          <li
            key={menu.id}
            className={`desktop-nav-element cursor-pointer w-50 h-50 relative flex items-center transition duration-300 my-20 mx-0 rounded-full ${dark ? "bg-black-2" : "bg-light-grey"
              } ${nav.includes(menu.href) ? "active" : ""}`}
            onClick={() => changeNav(menu.href)}
          >
            <i
              className={`${menu.icon} absolute left-0 right-0 mx-auto block text-center top-15 pointer-events-none text-fs-19 group-hover:text-white group-[.active]:text-white transition-all duration-300`}
            />
            <div className="group block p-0 w-50 h-50">
              <h2 className="absolute text-center -z-10 block h-50 pr-25 pl-30 text-fs-15 right-0 opacity-0 text-black-1 leading-lh-50 font-medium transition-all duration-300 rounded-30 group-hover:opacity-100 group-hover:right-27 group-hover:rounded-tl-30 group-hover:rounded-bl-30 group-hover:rounded-tr-none group-hover:rounded-br-none">
                {menu.title}
              </h2>
            </div>
          </li>
        ))}
      </ul>
      {/* Fixed Desktop Navigation Ends */}
      {/* Mobile Menu Starts */}
      <nav className="hidden down-md:block relative">
        <div
          id="menuToggle"
          className="fixed top-30 right-30 z-50 select-none pt-19 pl-16 w-54 h-54 rounded-5 bg-black-3 xs:right-15 xs:top-4 xs:pb-13 xs:w-49 xs:h-49"
        >
          <input
            id="inputmobile"
            className="h-54 w-54 absolute top-0 left-0 opacity-0 z-20 cursor-pointer peer"
            type="checkbox"
            checked={toggle}
            onChange={() => setToggle(!toggle)}
          />
          <span className="flex h-0.5 w-23 mb-5 relative bg-white z-10 rounded-3 origin-0 custom-transition peer-checked:rotate-45 peer-checked:translate-x-1 peer-checked:translate-y-0" />
          <span className="flex h-0.5 w-23 mb-5 relative bg-white z-10 rounded-3 origin-0-100 custom-transition peer-checked:opacity-0 peer-checked:scale-0-2" />
          <span className="flex h-0.5 w-23 mb-5 relative bg-white z-10 rounded-3 origin-0-100 custom-transition peer-checked:-rotate-45 peer-checked:translate-x-2 peer-checked:translate-y-2" />
          <ul
            className="fixed m-0 left-0 top-0 w-full h-full pt-60 bg-black-3 -translate-x-full ease-menu-mobile duration-500 peer-checked:transform-none [&>li]:cursor-pointer [&>li]:after:absolute [&>li]:after:h-px [&>li]:after:w-[calc(100%-60px)] [&>li]:after:bg-black-4 [&>li]:after:left-30 [&>li:last-child]:after:hidden"
            id="mobile-nav"
          >
            {menus.map((menu) => (
              <li
                key={menu.id}
                className={`mobile-nav-element ${nav == menu.href ? "active" : ""
                  } relative pl-30`}
              >
                <div
                  className="uppercase delay-2000 no-underline relative text-fs-26 xs:text-fs-18 py-14"
                  onClick={() => {
                    changeNav(menu.href);
                    setToggle(false);
                  }}
                >
                  <i className={menu.icon} />
                  <span className="absolute left-50 xs:left-35 font-normal">
                    {menu.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};
export default Header;

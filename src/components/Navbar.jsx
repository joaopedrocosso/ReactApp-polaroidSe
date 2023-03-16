import { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from 'react-scroll'
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (title) => {
    setActive(title);
    setToggle(false);
  }

  const { t } = useTranslation();

  return (
    <nav
      className={`w-full flex py-6 justify-between items-center navbar fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white" : ""
      }`}
    >
      {/* Logo do site */}
      <Link
        to="envie sua foto"
        smooth={true}
        duration={20}
        offset={-100}
        className="w-[186px] h-[48px] cursor-pointer"
      >
        <img src={logo} alt="hoobank" className="w-full h-full md:ml-12 xl:ml-6" />
      </Link>

      

      {/* Menu */}  
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-36 pr-0 xl:mr-96 xl:pr-36">
        <LanguageSwitcher />
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-NexaBold cursor-pointer text-[14px] tracking-wider ${
              active === nav.title ? "text-black" : "text-dimBlack"
            } ${navLinks.indexOf(nav) === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <Link
              to={nav.id}
              smooth={true}
              duration={20}
              offset={-100}
              onClick={() => handleClick(nav.title)}
            >
              {t(nav.title)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu responsívo para o celular */}      
      <div className="sm:hidden flex flex-1 justify-end items-center mr-20">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar w-full`}
        >

          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <div className="mb-4">
              <LanguageSwitcher />
            </div>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-dimBlack"
                } ${navLinks.indexOf(nav) === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <Link
                  to={nav.id}
                  smooth={true}
                  duration={20}
                  offset={-100}
                  onClick={() => handleClick(nav.title)}
                >
                  {t(nav.title)}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;

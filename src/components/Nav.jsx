import { BsMoonStarsFill } from "react-icons/bs";
import { TbArrowsCross } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../utils/useMediaQuery";

const navLinks = [
  { id: 1, name: "Intro", link: "#" },
  { id: 2, name: "About", link: "#" },
  { id: 3, name: "Work", link: "#" },
  { id: 4, name: "Blog", link: "#" },
  { id: 4, name: "Contact", link: "#" },
];

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

export const Nav = () => {
  const Logo = "a.svg";
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width:768px)");

  function handleToggled() {
    setToggled((prev) => !prev);
  }
  return (
    <nav
      class={`${
        toggled
          ? "fixed top-0 max-w-7xl z-50 w-full"
          : "absolute top-0 max-w-7xl w-full"
      }`}
    >
      <div className="absolute w-full z-50 text-white py-5 px-5">
        <div className="flex justify-between items-center">
          <a class="w-[175px]" href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <div class="flex items-center">
            <div class="md:flex items-center gap-3 hidden cursor-pointer">
              <span class="font-medium ">Turn on the lights !</span>
              <div class="h-8 w-8 rounded-full bg-gray-700 md:flex justify-center items-center">
                <BsMoonStarsFill />
              </div>
            </div>
            <div class="" onClick={handleToggled}>
              {!toggled ? (
                <div className="ml-10 grid grid-cols-2 gap-2 max-w-[30px] cursor-pointer">
                  <span class="block h-2 w-2 bg-white rounded-full"></span>
                  <span class="block h-2 w-2 bg-white rounded-full"></span>
                  <span class="block h-2 w-2 bg-white rounded-full"></span>
                  <span class="block h-2 w-2 bg-white rounded-full"></span>
                </div>
              ) : (
                <div className="ml-10 cursor-pointer">
                  <TbArrowsCross size="25" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {toggled && (
        <div className="h-screen fixed bottom-0 left-0 w-full flex justify-center items-center z-30 bg-[#140a0a]">
          <motion.ul
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex justify-center flex-col gap-5 items-center"
          >
            {navLinks.map((link) => (
              <motion.li
                variants={itemMotion}
                className="text-2xl lg:text-4xl text-white font-semibold"
                key={link.id}
              >
                <a href={link.link} className="links">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      )}
    </nav>
  );
};

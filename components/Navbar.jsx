import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BiBitcoin } from "react-icons/bi";
import ThemeToogle from "../context/ThemeToogle";

// import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={`fixed w-full h-20 z-[100] transition-colors duration-300 bg-[#ecf0f3] dark:bg-[#050505] ${
        shadow ? "shadow-xl" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 text-[#1f2937] dark:text-gray-100">
        <ThemeToogle />
        <div>
          <a
            className=" text-[#5651e5] w-12 p-4  mt-4"
            href="https://commerce.coinbase.com/checkout/ebae0c9b-c9da-4c53-a8a1-db2a06fed801"
          >
            <div className="flex center">
              <BiBitcoin
                size={50}
                className=" text-sm uppercase hover:border-b"
              />
              <span className="font-semibold">pay</span>
            </div>
          </a>
          <script
            src="https://commerce.coinbase.com/v1/checkout.js?version=201807"
            defer
          ></script>
        </div>
        {/*  <div className=" flex justify-between items-center w-full px-2 2xl:px-16">
          <div className=" w-12 p-4 ">
            <Link
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=847NTEWVH2JFW"
              target="_blank"
            >
              <p className="text-center py-3 rounded-lg bg-transparent text-gray-700 font-bold text-lg cursor-pointer">
                Payments
              </p>
            </Link>
          </div>
        </div> */}
        <div>
          <ul className="hidden md:flex items-center gap-4 text-sm uppercase">
            <li className="ml-10 text-sm uppercase hover:border-b text-[#1f2937] dark:text-gray-100">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b text-[#1f2937] dark:text-gray-100">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b text-[#1f2937] dark:text-gray-100">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b text-[#1f2937] dark:text-gray-100">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b text-[#1f2937] dark:text-gray-100">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b text-[#1f2937] dark:text-gray-100">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className="md:hidden text-[#1f2937] dark:text-gray-100"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? "  md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#111827] text-[#1f2937] dark:text-gray-100 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-left py-0">
              {/*               <Link href="/">
                <a>
                  <Image src={Logo} width="87" height="35" alt="/" />
                </a>
              </Link> */}
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div> */}
          </div>
          <div className="py-4 flex flex-col">

            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#1f2937] dark:text-gray-100"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#1f2937] dark:text-gray-100"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#1f2937] dark:text-gray-100"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#1f2937] dark:text-gray-100"
                >
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#1f2937] dark:text-gray-100"
                >
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-[#1f2937] dark:text-gray-100"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/jovan-raosavljevic/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/JoBaHP"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className=" rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className=" rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
/* https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=847NTEWVH2JFW */

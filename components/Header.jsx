"use client";
import { useState, useEffect } from "react";
import { logo, logo_blue, logo_half_white } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { socialMediaDataFooter } from "@/constatnt";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if the page has been scrolled more than 100px
      setIsScrolled(window.scrollY > 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About us", link: "/about-us" },
    { text: "Services", link: "/services" },
    { text: "Gallery", link: "/gallery" },
  ];

  const menuItemsPhone = [
    { text: "Home", link: "/" },
    { text: "About us", link: "/about-us" },
    { text: "Services", link: "/services" },
    { text: "Gallery", link: "/gallery" },
    { text: "Contact us", link: "/contact-us" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 py-5 px-[7.5rem] lg:max-2xl:px-[3rem] flex justify-between items-center  border-b border-[#e8e8e836]  transition-colors duration-300 sm:max-lg:px-[3rem] max-sm:px-[1rem] ${
        isScrolled ? "bg-[#fff] opacity-70" : "bg-transparent"
      }`}
    >
      <Link href={"/"}>
        <Image
          // src={isScrolled ? logo_blue : logo_half_white}
          src={logo}
          alt="logo"
          width={150}
          height={60}
          unoptimized
        />
      </Link>
      <div className="flex gap-8 justify-between sm:max-lg:hidden max-sm:hidden">
        {menuItems.map((item, index) => (
          <div key={index}>
            <Link
              href={item.link}
              className={`block px-4 py-2 ${
                item.link === "/"
                  ? pathname === "/"
                    ? `font-semibold ${
                        isScrolled ? "text-black" : "text-white"
                      }`
                    : isScrolled
                    ? "text-black"
                    : "text-white"
                  : pathname.startsWith(item.link)
                  ? `font-semibold ${isScrolled ? "text-black" : "text-white"}`
                  : isScrolled
                  ? "text-black"
                  : "text-[#cacaca]"
              } hover:text-gray-500`}
            >
              {item.text}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex gap-3 sm:max-lg:hidden max-sm:hidden">
          <Link href={"/contact-us"}>
            <button
              className={`${
                isScrolled
                  ? "text-white border-black bg-black hover:border-white hover:text-white"
                  : "text-black border-white bg-white hover:text-black"
              } 
    rounded-[50px] py-2 px-6 border duration-300 ease-in-out text-base transition-all`}
            >
              VISA Request{" "}
            </button>
          </Link>
        </div>
        <div className="flex gap-3 sm:max-lg:hidden max-sm:hidden">
          <Link href={"/contact-us"}>
            <button
              className={`${
                isScrolled
                  ? "text-black border-black hover:bg-primary hover:border-white hover:text-white"
                  : "text-white border-white hover:bg-white hover:text-black"
              } 
    rounded-[50px] py-2 px-6 border duration-300 ease-in-out text-base transition-all`}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden sm:max-lg:block max-sm:block">
        <Sheet className="bg-white">
          <SheetTrigger>
            <svg
              className={`${isScrolled ? "text-black" : "text-white"} h-6 w-6`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center gap-4 justify-center">
            <SheetHeader>
              <SheetTitle>
                <Link href={"/"}>
                  <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt="logo"
                    unoptimized
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>

            {menuItemsPhone.map((item) => (
              <SheetClose asChild key={item.text} className="">
                <Link
                  href={item.link}
                  className={`block px-4  text-lg  ${
                    pathname === item.link
                      ? " font-bold text-primary"
                      : "text-gray-700"
                  } hover:bg-gray-100`}
                >
                  {item.text}
                </Link>
              </SheetClose>
            ))}

            <div className="flex gap-5 mt-5">
              {socialMediaDataFooter.map((item, index) => (
                <Link href={item.url} key={index} target="_blank">
                  <div> {item.icon}</div>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;

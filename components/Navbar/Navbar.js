"use client";

import SigninModal from "@/components/signinModel";
import SignupModal from "@/components/signupModel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import Hamburg from "./Hamburg";
import Logo from "./Logo";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [LoginModelOpen, setLoginModelOpen] = useState(false);
  const { tutor, student } = useSelector((state) => state.auth);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openLoginModal = () => setLoginModelOpen(true);
  const closeLoginModal = () => setLoginModelOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "IGCSE", href: "/igcse" },
    { name: "Store", href: "/store" },
  ];

  const NavLink = ({ href, children, index }) => (
    <Link
      href={href}
      className={`hover:text-[#146CB0] hover:underline underline-offset-[2px] px-4 ${
        index === 0 ? "" : "border-l-2 border-[#737373]"
      }`}
    >
      {children}
    </Link>
  );

  return (
    <div className="flex justify-between items-center md:mx-8 my-4 mx-3">
      <div className="md:flex items-center">
        <Logo />
        <div className="font-semibold text-[18px] pl-12 text-[#515A60] hidden md:flex items-center space-x-2">
          {navLinks.map((link, index) => (
            <NavLink key={link.href} href={link.href} index={index}>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="space-x-4 flex items-center">
        <div
          style={{ width: tutor || student ? "480px" : "176px" }}
          className="hidden md:flex items-center border border-gray-300 rounded-md w-[176px] h-[48px]"
        >
          <div className="px-2">
            <Image
              src="/Vector2.png"
              alt="Search Icon"
              width={20}
              height={20}
            />
          </div>
          <div className="border-l border-[#8D979E] h-6 mx-2" />
          <input
            type="text"
            placeholder="Search"
            className="text-lg outline-none text-[#8D979E] bg-transparent w-full h-full pl-2"
          />
        </div>
        {tutor || student ? null : (
          <>
            <button
              className="bg-[#136FB6] text-sm md:text-[16px] text-white font-semibold p-2 md:px-5 md:py-3 rounded-[4px]"
              onClick={openModal}
            >
              Signup
            </button>
            <button
              onClick={openLoginModal}
              className="bg-[#1BADFF] text-sm md:text-[16px] text-white font-semibold p-2 md:px-4 md:py-2.5 rounded-[4px] flex"
            >
              <span> Login </span>
              <Image
                src="/image/Navbar/user.png"
                width={22}
                height={21}
                alt="User"
                className="md:block hidden ml-1"
              />
            </button>
          </>
        )}

        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          preventScroll={true}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.8)",
              justifyContent: "center",
              alignContent: "center",
            },
            content: {
              zIndex: 1000,
              padding: 0,
              margin: "auto",
              position: "static",
              maxHeight: "90vh",
              borderRadius: "20px",
            },
          }}
        >
          <SignupModal
            openLoginModal={openLoginModal}
            closeModal={closeModal}
          />
        </ReactModal>
        <ReactModal
          isOpen={LoginModelOpen}
          onRequestClose={closeLoginModal}
          preventScroll={true}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.8)",
              justifyContent: "center",
              alignContent: "center",
            },
            content: {
              zIndex: 1000,
              padding: 0,
              margin: "auto",
              position: "static",
              borderRadius: "20px",
              height: "90vh",
            },
          }}
        >
          <SigninModal
            openModal={openModal}
            closeLoginModal={closeLoginModal}
          />
        </ReactModal>
        <div className="">
          <Hamburg />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

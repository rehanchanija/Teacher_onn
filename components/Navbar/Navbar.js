import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "IGCSE  ",
      href: "/igcse",
    },
    {
      name: "Store",
      href: "/store",
    },
  ];
  const Navlinks = () => {
    return (
      <div className="md:flex items-center md:space-x-2 hidden  ">
        {navLinks.map((link) => (
          <div
            key={link.href}
            className="flex items-center border-l-2 hover:text-[#146CB0] hover:underline border-[#737373] px-4"
          >
            <NavLink href={link.href}>{link.name}</NavLink>
          </div>
        ))}
      </div>
    );
  };
  const NavLink = ({ href, children }) => {
    return (
      <Link href={href}>
        {children}
        {/* <div className="border-r-2 border-[#737373]"></div>
        <h1 className=" ">{children}</h1> */}
      </Link>
    );
  };

  return (
    <div className="flex justify-between items-center mx-12 my-4 ">
      <div className="flex items-center">
        <Logo />
        <div className="font-semibold text-[18px] pl-12 text-[#515A60] ">
          <Navlinks />
        </div>
      </div>
      <div className="space-x-4 flex ">
        <button className="bg-[#136FB6] text-white font-semibold px-4 py-3 rounded-[4px]">
          <Link href="">Signup as a Tutor</Link>
        </button>
        <button className="bg-[#1BADFF] text-white font-semibold px-6 py-3 rounded-[4px] flex space-x-2">
          <Link href="">Login</Link>
          <Image
            src="/image/Navbar/user.png"
            width={22}
            height={21}
            alt="reload"
          />
        </button>
      </div>
      <div>{/* <Hamburg /> */}</div>
    </div>
  );
};

export default Navbar;

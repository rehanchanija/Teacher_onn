import Image from "next/image";
import Link from "next/link";
import Hamburg from "./Hamburg";
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
    <div className="flex justify-between items-center md:mx-8 my-4 mx-3 ">
      <div className="md:flex items-center">
        <Logo />
        <div className="font-semibold text-[18px] pl-12 text-[#515A60] ">
          <Navlinks />
        </div>
      </div>
      <div className="space-x-4 flex ">
        <div className="hidden md:flex items-center border border-gray-300 rounded-md" style={{ width: '176px', height: '54px' }}>
          <div className="flex items-center justify-center px-2">
            <Image
              src="/Vector2.png" // Replace with correct path for your icon
              alt="Search Icon"
              width={20}
              height={20}
            />
          </div>

          {/* Vertical Line */}
          <div className="border-l border-[#8D979E] h-6 mx-2" /> {/* Vertical line */}

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="text-lg outline-none text-[#8D979E] bg-transparent w-full h-full pl-2"
          />
        </div>
        <button className="bg-[#136FB6] hidden md:block text-white font-semibold md:px-5 md:py-3 rounded-[4px]">
          <Link href="">Signup as a Tutor</Link>
        </button>
        <div className="flex items-center space-x-4">
          <Link href="/signup">
            <button className="bg-[#1BADFF] text-white font-semibold px-6 py-3 rounded-[4px] flex items-center space-x-2">
              Login
              <Image
                src="/image/Navbar/user.png"
                width={22}
                height={21}
                alt="reload"
              />
            </button>
          </Link>
          <div><Hamburg /></div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;


import Image from "next/image";

const Logo = () => {
  return (
    <div className="">
      <div>
        <Image
          src="/image/Navbar/logo.png"
          width={140}
          height={45.97}
          alt="reload"
          className="md:hidden"
        />
      </div>
      <Image
        src="/image/Navbar/logo.png"
        width={181}
        height={45.97}
        alt="reload"
        className="hidden md:block"
      />
    </div>

  );
};

export default Logo;

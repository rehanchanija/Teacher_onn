import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="">
      <Link href="/">
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
      </Link>
    </div>

  );
};

export default Logo;

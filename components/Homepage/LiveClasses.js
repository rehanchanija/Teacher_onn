import Image from "next/image";
import Link from "next/link";
import LiveClassesCard from "../Cards/LiveClassesCard";

const LiveClasses = () => {
  const combos = [1, 2, 3, 4, 5, 6];

  return (
    <div className="bg-white ">
      <div className="flex items-center  md:mb-6"
      >
        <div className="pb-6 hidden md:block ">
          <Image
            src="/image/home/live1.png"
            width={191.37}
            height={191.37}
            alt="a"
          />
        </div>
        <div className=" pb-6 md:w-[46.3rem] text-center mx-auto ">
          <Link href="" className="text-[#1BADFF] text-[20px]">
            ~ Live Classes ~
          </Link>
          <h1 className="md:text-[50px] text-[30px] pb-4  font-bold text-[#146DB2] ">
            <span className="text-[#0F283C]">Experience</span> Direction Classes
          </h1>
          <p className="text-[#667681] md:px-2 px-4 md:text-[20px]  ">
            Established with a vision to provide high-quality and accessible
            education, our platform is designed to cater to the diverse learning
            needs of students..
          </p>
        </div>
        <div className="pb-6 hidden md:block">
          <Image
            src="/image/home/live2.png"
            width={191.37}
            height={136.59}
            alt="a"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3  ggrid-ols-2    md:px-0">
        {combos.map((product, index) => (
          <LiveClassesCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default LiveClasses;

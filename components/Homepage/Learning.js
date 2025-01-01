import Image from "next/image";

const Learning = () => {
  return (
    <div className="bg-[#D3E4F0]   md:flex justify-evenly md:py-10 my-20 md:px-0 px-4 ">
      <div className=" md:w-[410px]  md:pb-0 pt-6 pb-8">
        <p className="md:text-[50px] text-[30px] font-black md:leading-[63.1px]   ">
          Online <span className="text-[#146DB2]"> Learning </span>
          Designed For <br className="md:block hidden" />
          <span className="text-[#146DB2]">Real Life!</span>
        </p>
      </div>
      <div className="md:border-r-2 border-[#6D8A9E]"></div>
      <div className="w-[305px] h-[240px] space-y-5 ">
        <Image src="/image/home/icon.png" width={56} height={61.09} alt="a" />
        <h1 className="text-[26px] font-bold leading-[32.19px] ">
          User-friendly <br></br> platform to learn
        </h1>
        <p className="text-[#667681]">
          Packed with modern technology, classroom learning which used to be
          done coventionally.
        </p>
      </div>
      <div className="md:w-[305px] md:h-[240px] space-y-5 md:py-0 py-8">
        <Image src="/image/home/icon.png" width={56} height={61.09} alt="a" />
        <h1 className="text-[26px] font-bold leading-[32.19px] ">
          Packed with modern <br></br> Technology.
        </h1>
        <p className="text-[#667681]">
          Learning theory, computer-based training, online learning, m-learning,
          where mobile technology is used
        </p>
      </div>
    </div>
  );
};

export default Learning;

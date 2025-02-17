import Image from "next/image";

const Learning = () => {
  return (
    <div className="  bg-[#EEF8FF]  p-8  gap-4  ">

      <div className="mx-auto flex max-w-6xl flex-col md:flex-row  ">
        {/* First Section */}
        <div className="flex flex-row items-center ">
          <p className="text-[32px] md:text-[50px] font-bold leading-tight ">
            Online <span className="text-[#146DB2]"> Learning </span>
            Designed For <br className="hidden md:block" />
            <span className="text-[#146DB2]">Real Life!</span>
          </p>
          <div className="hidden md:block h-full w-[2px] bg-gradient-to-b from-[#D9D9D9] to-[#6D8A9E]" />
        </div>


        <div className="flex flex-col md:flex-row  justify-center pt-8 md:pt-0  gap-6 md:pl-6 w-full">
          <div className="  w-full md:w-auto space-y-4  md:p-6 flex flex-col items-start ">
            <Image src="/image/home/icon.png" width={56} height={61} alt="icon" />
            <h1 className="text-[18px] md:text-[26px] font-bold leading-[28px] md:leading-[32px]">
              User-friendly  platform to learn
            </h1>
            <p className="text-[#667681] text-[14px] md:text-[18px]">
              Packed with modern technology,  classroom learning which used to be
              done conventionally.
            </p>
          </div>

          {/* Third Section */}
          <div className="  w-full md:w-auto space-y-4  md:p-6 flex flex-col items-start  ">
            <Image src="/image/home/icon.png" width={56} height={61} alt="icon" />
            <h1 className="text-[18px] md:text-[26px] font-bold leading-[28px] md:leading-[32px]">
              Packed with modern  Technology.
            </h1>
            <p className="text-[#667681] text-[14px] md:text-[18px]">
              Learning theory, computer-based
              training, online learning, m-learning, where mobile technology is used.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;

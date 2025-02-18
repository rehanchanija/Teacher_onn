import Image from "next/image";

const Premium = () => {
  return (
    <div className="bg-[#EDF7FF]">

      <div className="md:flex  md:justify-between  items-center max-w-6xl  mx-auto py-4">
        <div className="w-[50%] lg:pt-16 mx-auto">
          <Image
            src="/image/home/lady.png"
            width={429}
            height={504}
            alt="Reload"
            className=" " // Updated image width for larger screens
          />
        </div>
        <div className=" md:pl-16 pl-0 pt-6 md:pt-0 ">
          <div>
            <p className="xl:text-[50px] text-center md:text-left text-[30px] md:text-[40px] text-[#0F283C] font-bold md:leading-[68px]  py-4 md:py-8">
              Premium <span className="text-[#146DB2]"> Learning </span>Experience
            </p>

            <div className="flex flex-col px-6 md:px-0 md:flex-row space-y-6  md:space-y-0 md:space-x-8 py-6">
              <div className="bg-[#0F283C] w-[60px] h-[60px] md:w-[102px] md:h-[101px] rounded-2xl p-4 md:p-6">
                <Image
                  src="/image/home/hearts.png"
                  width={40}
                  height={40}
                  alt=""
                  className="md:w-[56px] md:h-[56px] w-[40px] h-[40px]"
                />
              </div>
              <div>
                <h1 className="md:text-[26px] text-[22px] text-[#0F283C] font-bold">
                  Easily Accessible
                </h1>
                <p className="text-[#667681] text-[16px] md:text-[24px] pt-2 md:pt-4">
                  Learning will feel very comfortable with Courslab.
                </p>
              </div>
            </div>

            <div className="flex flex-col px-6  md:px-0 md:flex-row space-y-6 md:space-y-0 md:space-x-8 py-6">
              <div className="bg-[#0F283C] w-[60px] h-[60px] md:w-[102px] md:h-[101px] rounded-2xl p-4 md:p-6">
                <Image
                  src="/image/home/puzzle.png"
                  width={40}
                  height={40}
                  alt=""
                  className="md:w-[56px] md:h-[56px] w-[40px] h-[40px]"
                />
              </div>
              <div>
                <h1 className="md:text-[26px] text-[22px] text-[#0F283C] font-bold">
                  Fun Learning Experience
                </h1>
                <p className="text-[#667681] text-[16px] md:text-[24px] pt-2 md:pt-4">
                  Learning will feel very comfortable with Courslab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;

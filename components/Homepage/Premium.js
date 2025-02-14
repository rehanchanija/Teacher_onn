import Image from "next/image";

const Premium = () => {
  return (
    <div className="bg-[#EDF7FF]">

      <div className="md:flex  md:justify-between items-center max-w-6xl px-4 md:px-6 mx-auto py-4">
        <div className="md:pt-12 md:pl-8 py-4 w-full md:w-auto">
          <div className="w-full ">
            <Image
              src="/image/home/lady.png"
              width={429}
              height={534}
              alt="Reload"
              className="w-full h-auto md:w-[429px] lg:w-[400px]" // Updated image width for larger screens
            />
          </div>
        </div>
        <div className="md:w-[647px] md:pt-2  md:px-0">
          <div>
            <p className="text-[36px]  text-[#0F283C] font-extrabold md:leading-[68px] py-4 md:py-8">
              Premium <span className="text-[#146DB2]"> Learning </span>Experience
            </p>

            <div className="flex flex-col md:flex-row space-y-6 px-4 md:space-y-0 md:space-x-8 py-6">
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
                <h1 className="text-[26px] text-[#0F283C] font-black">
                  Easily Accessible
                </h1>
                <p className="text-[#667681] text-[24px] pt-2 md:pt-4">
                  Learning will feel very comfortable with Courslab.
                </p>
              </div>
            </div>

            <div className="flex flex-col  px-4  md:flex-row space-y-6 md:space-y-0 md:space-x-8 py-6">
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
                <h1 className="text-[26px] text-[#0F283C] font-black">
                  Fun Learning Experience
                </h1>
                <p className="text-[#667681] text-[24px] pt-2 md:pt-4">
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

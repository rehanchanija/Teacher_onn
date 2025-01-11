import Image from "next/image";

const Premium = () => {
  return (
    <div className="md:flex bg-[#EDF7FF] md:justify-between items-center px-6 mx-auto py-4">
      <div className="md:pt-16 md:pl-12 py-4 w-full md:w-auto ">
        <Image
          src="/image/home/lady.png"
          width={429}
          height={534}
          alt="Reload"
      />
      </div>
      <div className="md:w-[647px] md:pt-2 ">
        <div>
          <p className="md:text-[50px] text-2xl text-[#0F283C] font-extrabold md:leading-[68px]  py-8 ">
            Premium <span className="text-[#146DB2]"> Learning </span>Experience
          </p>

          <div className="flex space-x-8 py-6">
            <div className="bg-[#0F283C] w-[102px] h-[101px] rounded-2xl  md:p-6 ml-1">
              <Image
                src="/image/home/hearts.png"
                width={56}
                height={56}
                alt=""
                className=""
              />
            </div>
            <div className="">
              <h1 className="text-[26px] text-[#0F283C] font-black ">
                Easily Accessible
              </h1>
              <p className="text-[#667681] text-[24px] pt-4 ">
                Learning Will fell Very Comfortable With Courslab.
              </p>
            </div>
          </div>
          <div className="flex space-x-8 py-6">
            <div className="bg-[#0F283C] w-[102px] h-[101px] rounded-2xl p-6 ml-1">
              <Image
                src="/image/home/puzzle.png"
                width={56}
                height={56}
                alt=""
                className=""
              />
            </div>
            <div className="">
              <h1 className="text-[26px] text-[#0F283C] font-black ">
                Fun learning expe
              </h1>
              <p className="text-[#667681] text-[24px] pt-4 ">
                Learning Will fell Very Comfortable With Courslab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;

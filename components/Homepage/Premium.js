import Image from "next/image";

const Premium = () => {
  return (
    <div className="flex bg-[#EDF7FF] justify-between mx-">
      <div className="flex w-[427.75] my-12 ">
        <Image
          src="/image/home/lady.png"
          width={351.56}
          height={490.41}
          alt=""
      />
      </div>
      <div className="w-[647px] h-[479px] ">
        <div>
          <p className="text-[50px] text-[#0F283C] font-semibold leading-[63.1px]  py-8 ">
            Premium <span className="text-[#146DB2]"> Learning </span>Experience
          </p>

          <div className="flex space-x-8 py-6">
            <div className="bg-[#0F283C] w-[102px] h-[101px] rounded-2xl p-6 ml-1">
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
              <p className="text-[#667681] text-[24px] pt-6 ">
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
              <p className="text-[#667681] text-[24px] pt-6 ">
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

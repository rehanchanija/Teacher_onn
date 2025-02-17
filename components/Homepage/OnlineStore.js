import Image from "next/image";
import Link from "next/link";

const OnlineStore = () => {
  return (
    <div className=" md:mt-24 md:mx-8 mx-4  mt-20">
      <div className="md:flex justify-between  mx-auto  max-w-6xl  bg-[#146DB2] rounded-2xl  lg:space-x-12  md:px-4 space-x-4 space-y-3 ">
        <div className="md:flex md:flx-col p-4  items-center ">
          <Image
            src="/image/home/onlinestore.png"
            width={618}
            height={411.95}
            alt="reload"
            className=""
          />
        </div>
        <div className=" text-white md:w-[50%] pt-6 md:pb-12 pb-8 ">
          <h1 className="text-[30px] xl:text-[50px] md:text-[40px] pb-4  font-bold  ">Online Store</h1>
          <p className="text-white pb-4 pr-2 md:pr-0  text-[14px] md:text-[20px]   ">
            Established with a vision to provide high-quality and accessible
            education, our platform is designed to cater to the diverse learning
            needs of students..
          </p>
          <p className="pb-6 md:font-semibold font-medium text-[16px] md:text-[26px]">
            Buy and sell notes | Lesson plans | Worksheets | Presentations |
            Research Papers | Digital activities | and other Educational tools.
          </p>
          <div className="flex space-x-5 ">
            <button className="bg-[#1BADFF]  font-medium px-6 text-[14px] rounded py-3 md:text-[17.36px] ">
              <Link href="">View Store</Link>
            </button>
            <Image
              src="/image/home/white-arrow.svg"
              width={49.66}
              height={54.67}
              alt="reload"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default OnlineStore;

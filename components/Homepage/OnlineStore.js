import Image from "next/image";
import Link from "next/link";

const OnlineStore = () => {
  return (
    <div className="bg-[#146DB2] ">
      <div className="md:flex justify-between max-w-6xl mx-auto md:space-x-24 space-x-4 space-y-3  p-3 rounded-2xl ">
        <div className="md:flex md:flx-col  items-center ">
          <Image
            src="/image/home/onlinestore.png"
            width={618}
            height={411.95}
            alt="reload"
            className=""
          />
        </div>
        <div className=" text-white md:w-[50%] pt-6 pb-8  ">
          <h1 className=" text-[50px] pb-4  font-semibold  ">Online Store</h1>
          <p className="text-white pb-4  text-[20px]   ">
            Established with a vision to provide high-quality and accessible
            education, our platform is designed to cater to the diverse learning
            needs of students..
          </p>
          <p className="pb-6 font-bold text-[26px]">
            Buy and sell notes | Lesson plans | Worksheets | Presentations |
            Research Papers | Digital activities | and other Educational tools.
          </p>
          <div className="flex space-x-5 ">
            <button className="bg-[#1BADFF]  w-[179.36px]  rounded py-3 text-[17.36px] ">
              <Link href="">View Store</Link>
            </button>
            <Image
              src="/image/home/Vectorwhite.png"
              width={45.66}
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

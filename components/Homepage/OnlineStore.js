import Image from "next/image";
import Link from "next/link";

const OnlineStore = () => {
  return (
    <div>
      <div className="bg-[#146DB2] md:flex md:justify-between space-x-12 space-y-3 md:p-8 rounded-2xl ">
        <div className="pt-4">
          <Image
            src="/image/home/onlinestore.png"
            width={618}
            height={411.95}
            alt="reload"
          />
        </div>
        <div className="md:w-[513px] text-white pb-6  ">
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

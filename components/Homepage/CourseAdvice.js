import Image from "next/image";
import Link from "next/link";

const CourseAdvice = () => {
  return (
    <div className="bg-white  ">
      <div className="flex items-center  md:px-2 ">
        <div className="pb-6">
          <Image
            src="/image/home/live1.png"
            width={191.37}
            height={136.59}
            alt="a"
          />
        </div>
        <div className=" pb-6 md:w-[46.3rem] text-center mx-auto ">
          <Link href="" className="text-[#1BADFF] text-[18px]">
            ~ COURSE ADVICE ~
          </Link>
          <h1 className="md:text-[50px] text-[30px] pb-4 flex md:block font-semibold leading-[63.1px] text-[#0F283C]">
            Experience <span className="text-[#146DB2] pl-3">Categories</span>
          </h1>
          <p className="text-[#667681]  md:text-[20px] ">
            Established with a vision to provide high-quality and accessible
            education, our platform is designed to cater to the diverse learning
            needs of students..
          </p>
        </div>
        <div className="pb-6">
          <Image
            src="/image/home/live2.png"
            width={191.37}
            height={136.59}
            alt="a"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CourseAdvice;
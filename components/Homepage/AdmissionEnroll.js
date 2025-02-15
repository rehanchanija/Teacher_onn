import Image from "next/image";
import Link from "next/link";
import AdmissionButton from "../Atoms/AdmissionButton";

const AdmissionEnroll = () => {
  return (
    <div className=" max-w-6xl mx-auto">

      <div className="md:flex  justify-between pt-24 lg:px-12 xl:px-0 px-6  ">
        <div className=" md:w-[528px] text-[20px]  mb-5 ">
          <Link href="" className="text-[#1BADFF] text-center text-[18px]">
            ~ TRENDING NOW ~
          </Link>
          <h1 className="xl:text-[3.1rem] text-[30px] pb-4  font-extrabold  text-[#0F283C]">
            IGCSE & ICSE <span className="text-[#146DB2]">TUTORS</span>
          </h1>
          <p className="text-[#667681] xl:text-[20px] text-[18px] pb-4 text-center md:text-left  pr-4 ">
            Established with a vision to provide high-quality and accessible
            education, our platform is designed to cater to the diverse learning
            needs of students..
          </p>
          <p className="pb-6 md:pt-0 pt-5">
            ADMISSION FOR CLASS
            <span className="text-[#1BADFF] font-semibold"> 9TH AND 10TH</span>
          </p>
          <AdmissionButton />
        </div>

        <div className="">
          <div className="bg-[#1BADFF] md:h-[528px] rounded-2xl pt-2.5   ">
            <Image
              src="/image/home/trendingImage.png"
              width={480.29}
              height={556.92}
              alt="reload"
              className="p-5 "
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdmissionEnroll;

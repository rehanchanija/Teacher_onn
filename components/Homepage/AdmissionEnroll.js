import Image from "next/image";
import Link from "next/link";
import AdmissionButton from "../Atoms/AdmissionButton";

const AdmissionEnroll = () => {
  return (
    <div className="flex justify-between  mt-24 h-[589px] realative ">
      <div className=" w-[528px] text-[20px] mt-5 ">
        <Link href="" className="text-[#1BADFF] text-[18px]">
          ~ TRENDING NOW ~
        </Link>
        <h1 className="text-[3.1rem] pb-4  font-semibold  text-[#0F283C]">
          IGCSE & ICSE <span className="text-[#146DB2]">TUTORS</span>
        </h1>
        <p className="text-[#667681] pb-4    ">
          Established with a vision to provide high-quality and accessible
          education, our platform is designed to cater to the diverse learning
          needs of students..
        </p>
        <p className="pb-6">
          ADMISSION FOR CLASS
          <span className="text-[#1BADFF] font-semibold"> 9TH AND 10TH</span>
        </p>
        <AdmissionButton />
      </div>

      <div className="">
        <div className="bg-[#1BADFF] h-[528px] rounded-2xl pt-2.5  ">
          <Image
            src="/image/home/trendingImage.png"
            width={480.29}
            height={556.92}
            alt="reload"
            className="p-5 "
          />
        </div>
        <div className="absolute -bottom-[39.5rem] right-[21.5rem] ">
          <Image
            src="/image/home/igcse.png"
            width={360}
            height={220}
            alt=""
            className="b"
          />
        </div>
        <button className="absolute -bottom-[37.2rem] right-[28rem] ">
          <Link href="" className="text-white text-[22px]    ">
            <Image
              src="/image/home/youtube.png"
              width={101}
              height={101}
              alt="reload"
            />
            Watch Video
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AdmissionEnroll;

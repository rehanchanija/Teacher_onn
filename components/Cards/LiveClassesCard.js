import Image from "next/image";
import Link from "next/link";

const LiveClassesCard = () => {
  return (
    <div className="p-3 md:w-[360px]  bg-white shadow-2xl  m-3 px-2 md:mr-4  rounded-lg ">
      <Image src="/image/home/livecard.png" width={387} height={199} alt="" />
      <div className=" space-y-2 bg-white ">
        <div className="flex items-center pt-3 ">
          <span href="" className="pr-2 text-[20px] text-[#778D9E]">
            4.9 <span className="text-[#F8A401]">★★★★☆</span>
          </span>

        </div>
        <p className="text-[20px] font-bold pt-1.5  ">
          BTech Tuition - BTech 1st Year <br></br>Engineering....
        </p>
        <span className="flex py-2">
          <Image
            src="/image/home/msg.png"
            width={20}
            height={19.5}
            alt="reload"
          />
          <p className="text-[16px] text-[#667681] px-2 ">
            Sat, 6 Jul at 06:00pm IST
          </p>
        </span>
        <span className="flex space-x-5 pb-4">
          <h2 className="text-[18px] border-r-2 pr-3 border-gray-400">
            Class <br /> starts in
          </h2>
          <Image
            src="/image/home/hour.png"
            width={36}
            height={36}
            alt="reload"
          />
          <Image
            src="/image/home/min.png"
            width={41.94}
            height={44.34}
            alt="reload"
          />
          <Image
            src="/image/home/sec.png"
            width={41.94}
            height={44.34}
            alt="reload"
          />
        </span>
        <button className="bg-[#1BADFF] text-white font-semibold w-full  py-4 rounded-[4px] text-[17.36px] ">
          <Link href="">Register Now</Link>
        </button>
        <div className="text-center space-x-1 pb-2 text-[14px]">
          <Link href="" className="text-[#146DB2]">
            FREE
          </Link>
          <span> TRIAL CLASS</span>
        </div>
      </div>
    </div>
  );
};

export default LiveClassesCard;

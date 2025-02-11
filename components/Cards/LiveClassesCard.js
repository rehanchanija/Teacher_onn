import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
import '@smastrom/react-rating/style.css'

const LiveClassesCard = ({ tutor }) => {
  const { educationInfo } = tutor
  return (
    <div className="px-2.5 py-3  m-2  bg-white shadow-2xl     rounded-[11.69px] ">
      <Image src="/image/home/livecard.png" width={387} height={199} alt="" className="rounded-[10px]" />
      <div className=" bg-white space-y-1  ">
        <div className="flex items-center pt-3 ">
          <span href="" className="pr-2 text-[22px] flex  text-[#778D9E]">
            {tutor?.rating}
          </span>
          <Rating readOnly value={tutor?.rating} style={{
            width: "30%"
          }} />

        </div>
        <p className="text-[20px] font-bold pb-3  ">
          {educationInfo[0]?.degreeName} {educationInfo[0]?.degreeType}
        </p>

        <button className="bg-[#1BADFF] text-white font-semibold w-full   py-3 rounded-[4px] text-[17.36px] ">
          <Link href="">Register Now</Link>
        </button>
        <div className="text-center space-x-1 pt-1 pb-1 text-[14px]">
          <Link href="" className="text-[#146DB2]">
            FREE
          </Link>
          <span> TRIAL CLASS</span>
        </div>
      </div>
    </div >
  );
};

export default LiveClassesCard;

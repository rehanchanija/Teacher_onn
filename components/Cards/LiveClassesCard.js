import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
import '@smastrom/react-rating/style.css';
import { useSelector } from "react-redux";


const LiveClassesCard = ({ tutor }) => {

  const { educationInfo, experience } = tutor;
  

  const currentYear = new Date().getFullYear();

  let totalExperience = "Fresher (No Experience)";
  if (experience?.length > 0) {
    const startYear = parseInt(experience[0]?.startDate);
    let endYear = experience[0]?.endDate === "present" ? currentYear : parseInt(experience[0]?.endDate);
    
    if (startYear < endYear) {
      totalExperience = `${endYear - startYear} years of Experience`;
    }
  }
  
  return (
    <div className="m-2 p-2.5 bg-white shadow-2xl rounded-[11.69px]">
      <div className="w-full">
        <Image
          src="/image/home/livecard.png"
          width={387}
          height={199}
          alt="Live Class"
          className="rounded-[10px] w-full h-auto object-cover"
        />
      </div>
      <div className="bg-white space-y-1">
        <div className="flex items-center pt-3">
          <Rating
            readOnly
            value={tutor?.rating}
            style={{ width: "30%" }}
          />
          <span className="pl-2 text-[22px] flex text-[#778D9E]">
            {tutor?.rating}
          </span>
        </div>
        <p className="text-[20px] font-bold pb-1 truncate">
          {educationInfo[0]?.degreeName} {educationInfo[0]?.degreeType}
        </p>
        <p className="md:text-[20px] text-[16px] font-medium pb-3">
          {totalExperience}
        </p>

        <Link href={`/profile/${tutor?._id}/`}>
        <button
        className="mx-1 bg-[#1BADFF] text-white font-semibold w-full py-3 rounded-[4px] text-[17.36px]">
        
          Register Now
        </button>
        </Link>
        <div className="text-center space-x-1 pt-1 pb-1 text-[14px]">
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

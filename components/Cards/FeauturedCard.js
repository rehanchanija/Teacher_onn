import Image from "next/image";
import Link from "next/link";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const FeauturedCard = ({ tutor }) => {
  const { personalInfo } = tutor

  return (
    <div className="px-2   py-4 rounded-lg w-[294px] ">
      <Image src="/image/home/cards.png"
        width={294} height={442} alt="" />
      <div className="px-6 py-3 bg-white rounded-b-lg">
        <h1 className="text-[24px] font-bold pt-1.5">{personalInfo?.fullName}</h1>
        <p className="text-[18px] text-[#667681] pb-2"> {personalInfo?.speciality}</p>
        <div className="flex pb-4 items-centers ">
          <Rating readOnly value={tutor?.rating} style={{
            width: "40%"
          }} />
          <Link href="" className="pl-2 pt-1  text-[18px] text-[#146DB2]">
            799 Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeauturedCard;

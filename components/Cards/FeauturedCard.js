import Image from "next/image";
import Link from "next/link";

const FeauturedCard = ({ tutor }) => {
  const { personalInfo } = tutor

  return (
    <div className="px-2   py-4 rounded-lg w-[294px] ">
      <Image src="/image/home/cards.png"
        width={294} height={442} alt="" />
      <div className="px-6 py-3 bg-white rounded-b-lg">
        <h1 className="text-[24px] font-bold pt-1.5">{personalInfo?.fullName}</h1>
        <p className="text-[18px] text-[#667681] pb-2"> {personalInfo?.speciality}</p>
        <span className="flex pb-4 items-centers ">
          <span className="text-[#F8A401] text-2xl ">★★★★☆</span>
          <Link href="" className="pl-2 pt-1  text-[18px] text-[#146DB2]">
            799 Reviews
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FeauturedCard;

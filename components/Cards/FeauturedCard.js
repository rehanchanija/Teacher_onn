import Image from "next/image";
import Link from "next/link";

const FeauturedCard = () => {
  return (
    <div className="px-3   py-4 rounded-lg w-[294px] ">
      <Image src="/image/home/cards.png" width={294} height={442} alt="" />
      <div className="px-6 py-3 bg-white rounded-b-lg">
        <h1 className="text-[24px] font-bold pt-1.5">Hrithik C.</h1>
        <p className="text-[18px] text-[#667681] pb-2"> Class 11 Tuition</p>
        <span className="flex pb-4 ">
          <Image src="/image/home/rate.png" width={100} height={17} alt="aaa" />
          <Link href="" className="pl-2  text-[18px] text-[#146DB2]">
            799 Reviews
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FeauturedCard;

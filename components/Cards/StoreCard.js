import Image from "next/image";
import Link from "next/link";

const StoreCard = () => {
  return (
    <div className="p-3 md:w-[360px]  bg-[#D9E8F3] shadow-2xl  m-3 px-2 md:mr-4  rounded-lg ">
      <Image src="/image/home/StoreCard.png" width={387} height={199} alt="" />
      <div className=" space-y-2 px-2">
        <h1 className="text-[20px] font-semibold pt-3">Bad Habits</h1>
        <div className="flex items-center pt-3 ">
          <span
            href=""
            className="p-1 mr-2 text-[14px] bg-[#1BADFF] text-white"
          >
            By VIJAY ANAND{" "}
          </span>
          <span className="text-[#F8A401]">★★★★☆ (79)</span>
        </div>
        <ol className="text-[#136EB4]">
          <li className="text-[16px] font-bold pt-1.5  ">
            Beginner | Intermediate | Expert | Adult/Casual learning{" "}
          </li>
          <li className="text-[16px] font-bold pt-1.5  ">Activity | Music</li>
        </ol>
        <p className="flex item-center py-2">
          <span className="text-[24px] text-black pr-2 font-bold ">$282</span>
          <span className="text-[20px] pt-[6px] text-[#667681] ">$500 </span>
          <span className="text-[18px] pt-[6px] pl-2 text-red-500">(-43%)</span>
        </p>

        <button className="border border-[#136EB4] text-[#136EB4] font-semibold w-full  py-4 rounded-[4px] text-[17.36px] ">
          <Link href="">Add to Cart</Link>
        </button>
      </div>
    </div>
  );
};

export default StoreCard;

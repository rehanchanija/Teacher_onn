// import Arrow from "@/assets/icons/Arrow";

import Link from "next/link";

const TeachingCard = () => {
  return (
    <div className="md:w-[617px]    bg-[#9DDDAB] rounded-xl font-semibold px-8 py-3 items-center md:mx-4 mt-6  ">
      <h1 className="md:text-[50px] text-[30px] py-4">Teaching Jobs</h1>
      <div className="space-y-4 text-[22px] font-medium pb-5 ">
        <div className="flex justify-between rounded-lg bg-white px-8 py-3 items-center">
          <h1>Teacher Jobs</h1>
          <button className="bg-[#72B482] text-2xl text-white px-2.5 py-1 rounded-full font-bold ">
            <Link href="">➝</Link>
          </button>
        </div>
        <div className="flex justify-between rounded-lg bg-white px-8 py-3 items-center">
          <h2>Online Teaching</h2>
          <button className="bg-[#72B482] text-2xl text-white px-2.5 py-1 rounded-full font-bold ">
            <Link href="">➝</Link>
          </button>
        </div>
        <div className="flex justify-between rounded-lg bg-white px-8 py-3 items-center">
          <h2>Home Teaching</h2>
          <button className="bg-[#72B482] text-2xl text-white px-2.5 py-1 rounded-full font-bold ">
            <Link href="">➝</Link>
          </button>
        </div>
        <div className="flex justify-between rounded-lg bg-white px-8 py-3 items-center">
          <h2>Assignment jobs</h2>
          <button className="bg-[#72B482] text-2xl text-white px-2.5 py-1 rounded-full font-bold ">
            <Link href="">➝</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachingCard;

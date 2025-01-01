// import Arrow from "@/assets/icons/Arrow";

import Link from "next/link";

const StudentCard = () => {
  return (
    <div className="md:w-[617px]    bg-[#C4C8EE] rounded-xl font-semibold px-8 py-4  md:mx-4 mt-6">
      <h1 className="md:text-[50px] text-[30px] py-4">Student</h1>
      <div className="space-y-4 text-[22px] font-medium pb-5 ">
        <div className="flex justify-between rounded-lg bg-white md:px-8 py-3 items-center">
          <h1>Teacher</h1>
          <button className="bg-[#7B82CA] text-2xl text-white px-2.5 py-1 rounded-full font-bold ">
            <Link href="">➝</Link>
          </button>
        </div>
        <div className="flex justify-between rounded-lg bg-white md:px-8 py-3  items-center">
          <h2>Online Teacher</h2>
          <button className="bg-[#7B82CA] text-2xl text-white px-2.5 py-1 rounded-full font-bold ">
            <Link href="">➝</Link>
          </button>
        </div>{" "}
        <div className="flex justify-between rounded-lg bg-white md:px-8 py-3  items-center">
          <h2>Home Teacher</h2>
          <button className="bg-[#7B82CA] text-2xl text-white px-2.5 py-1 rounded-full font-bold ">
            <Link href="">➝</Link>
          </button>
        </div>{" "}
        <div className="flex justify-between rounded-lg bg-white md:px-8 py-3  items-center">
          <h2>Assignment Help</h2>
          <button className="bg-[#7B82CA] text-2xl text-white px-2.5 py-1 rounded-full font-bold ">
            <Link href="">➝</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;

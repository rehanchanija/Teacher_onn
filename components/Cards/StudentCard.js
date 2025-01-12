// import Arrow from "@/assets/icons/Arrow";

import Link from "next/link";
 const button = ["Teacher", "Online Teacher", "Home Teacher", "Assignment Help"];
const StudentCard = () => {
  return (
    <div className="md:w-[617px]    bg-[#C4C8EE] rounded-xl font-semibold px-8 py-6   mt-6">
      <h1 className="md:text-[50px] font-extrabold text-[#0F283C] text-[30px] pb-6 pt-2">Student</h1>
      <div className="space-y-4 text-[22px] font-medium pb-5 ">
        
        {

          button.map((item) => (
        <div className="flex justify-between rounded-xl bg-white md:px-8 py-3 items-center">

            <h1>{item}</h1>
            <button className="bg-[#7B82CA] text-3xl text-white px-2 py-1.5 rounded-full font-bold ">
            <Link href="">➝</Link>
          </button>
          </div>

          ))

        }  
      </div>
    </div>
  );
};

export default StudentCard;

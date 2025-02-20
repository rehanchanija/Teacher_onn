import {
  postgraduateDegrees,
  schoolClasses,
  undergraduateDegrees,
} from "@/utils/constant";
import Link from "next/link";
import { useState } from "react";

const CourseAdviceCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Category");

  const Tuition = [
    ...schoolClasses.map((item) => `${item} Tuitions`),
    ...undergraduateDegrees.slice(0, 3).map((item) => `${item} Tuitions`),
    ...postgraduateDegrees.slice(0, 3).map((item) => `${item} Tuitions`),
  ];
  const Languages = [
    "Spoken English",
    "IELTS",
    "French Language",
    "PTE",
    "Spanish Language",
    "TOEFL",
    "German Language",
    "Hindi Language",
  ];

  const Hobbies = [
    "Singing",
    "Yoga",
    "Sports",
    "Dance",
    "Guitar",
    "Personality Development Training",
  ];
  const More = [
    "Online Tuitions",
    "Online Language Classes",
    "Online Hobby Classes",
    "Spoken Online IT Coaching",
    "Online Exam Entrance Coaching",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <div className=" md:space-x-8 space-y-4 md:space-y-0 md:flex justify-between  ">
        {/* Tuitions Section */}
        <div className="md:w-[50%] bg-[#F6FBFF] md:p-4  border-t-4 border-t-[#146DB2]   rounded-lg space-y-6 ">
          <div className=" mt-2 pl-3 md:pl-0 md:mt-0">
            <h3
              className="text-[#136FB6] text-[22px] font-semibold mx-2   mb-2 flex 
            items-center justify-between w-[6.8rem]"
            >
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px] " />
              Tuitions
            </h3>
            <div className="pt-2  pl-1 md:pl-0">
              {Tuition.map((item, index) => (
                <button
                  key={index}
                  className="p-2 m-1 md:m-2  text-[#8397A6] md:text-[18px]  text-left border rounded-md border-[#9EB5C7]"
                >
                  <Link href={`/teacher-list?filter=${item}`}>
                  {item}</Link>
                </button>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className=" mt-2 pl-2 md:pl-0 md:mt-0">
            <h3 className="text-[#136FB6]  md:mx-2 mx-4 text-[22px] font-semibold  mb-3 flex items-center justify-between w-[8.5rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              Languages
            </h3>
            <div className=" pt-2 mx-2 md:mx-0 mb-4 pb-4 md:pb-0 md:mb-0">
              {Languages.map((item, index) => (
                <button
                  key={index}
                  className="  px-4 py-2  m-1 md:m-2  text-[#8397A6] md:text-[18px] text-left border rounded-md border-[#9EB5C7]"
                  aria-label={`Select ${item}`}
                >
                  <Link href="/">{item}</Link>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div
          className="md:w-[50%] bg-[#F6FBFF] md:p-4  border-t-4 border-t-[#1BADFF]                        
       rounded-lg space-y-6 shadow-[#1BADFF]"
        >
          <div className=" mt-2 pl-3 md:pl-0 md:mt-0">
            <h3 className="text-[#136FB6] mx-2 text-[22px] font-semibold  mb-2 flex items-center justify-between w-[6.8rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              Hobbies{" "}
            </h3>
            <div className=" pl-1 md:pl-0   md:mx-0 pt-2   ">
              {Hobbies.map((item, index) => (
                <button
                  key={index}
                  className="px-3 py-2 md:m-2 m-1  text-[#8397A6] md:text-[18px] text-left border rounded-md border-[#9EB5C7]"
                  aria-label={`Select ${item}`}
                >
                  <Link href="/">{item}</Link>
                </button>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="pl-3 md:pl-0 ">
            <h3 className="text-[#136FB6] text-[22px] font-semibold mx-2  mb-1 flex items-center justify-between w-[5rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              More{" "}
            </h3>

            <div className="pb-4 pt-2 mx-1 md:mx-0 flex  flex-wrap md:block ">
              {More.map((item, index) => (
                <button
                  key={index}
                  className="px-3 py-2  m-1 md:m-2 text-[#8397A6] md:text-[18px] text-left border rounded-md border-[#9EB5C7]"
                  aria-label={`Select ${item}`}
                >
                  <Link href="/">{item}</Link>{" "}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAdviceCard;

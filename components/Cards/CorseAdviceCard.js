import Link from "next/link";
import { useState } from "react";

const CourseAdviceCard = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Category');

  const Tuition = [
    "Class 12 Tuition",
    "Class 7 Tuition",
    "Class 11 Tuition",
    "Class 6 Tuition",
    "Class 10 Tuition",
    "Class I-V Tuition",
    "Class 9 Tuition",
    "Class 8 Tuition",
    "BCom Tuition",
    "BTech Tuition",
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
  const categories = [
    'All Category',
    'Online Classes',
    'Tuition',
    'Languages',
    'Hobby Classes',
    'IT Courses',
    'Exam Coaching'
  ];
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (

    <div>
      <div className="md:flex flex-wrap hidden  mb-8 text-[#9FAAB2]  font-semibold">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}

            className="px-3 py-2 rounded-full text-[18px] "
          >
            {category}
          </button>
        ))}
        <button className="ml-auto text-[16px] border border-[#6C757C] px-4 py-2 rounded">
          Popular Course
        </button>
      </div>



      <div className=" md:space-x-8 space-y-4 md:space-y-0 md:flex justify-between  ">
        {/* Tuitions Section */}
        <div className="md:w-[50%] bg-[#F6FBFF] md:p-5   border border-[#DEE8FF] rounded-lg space-y-6 ">
          <div className=" mt-2">
            <h3 className="text-[#136FB6] text-[22px] font-semibold md:mx-2 mx-4  mb-2 flex 
            items-center justify-between w-[6.8rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px] " />
              Tuitions
            </h3>
            <div className="pt-2 mx-3 md:mx-0 ">
              {Tuition.map((item, index) => (
                <button
                  key={index}
                  className="p-2 m-1 md:m-2  text-[#8397A6] text-[18px]  text-left border w-[148px] rounded-sm border-[#9EB5C7]"
                >
                  <Link href="/">{item}</Link>
                </button>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="md:w-[443px] ">
            <h3 className="text-[#136FB6]  md:mx-2 mx-4 text-[22px] font-semibold  mb-3 flex items-center justify-between w-[8.5rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              Languages
            </h3>
            <div className=" pt-2 mx-2 md:mx-0 mb-2 md:mb-0">
              {Languages.map((item, index) => (
                <button
                  key={index}
                  className="  px-3 py-2  m-2  text-[#8397A6] text-[18px] text-left border rounded-sm border-[#9EB5C7]"
                  aria-label={`Select ${item}`}
                >
                  <Link href="/">{item}</Link>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div
          className="md:w-[50%] bg-[#F6FBFF] md:p-5                         
       border border-[#DEE8FF] rounded-lg space-y-6 shadow-[#1BADFF]"
        >
          <div className="md:mt-2 mt-3 ">
            <h3 className="text-[#136FB6] md:mx-2  mx-4 text-[22px] font-semibold  mb-2 flex items-center justify-between w-[6.8rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              Hobbies{" "}
            </h3>
            <div className=" mx-3   md:mx-0 pt-2   ">
              {Hobbies.map((item, index) => (
                <button
                  key={index}
                  className="px-3 py-2 md:mx-2 m-1 md:my-2 text-[#8397A6] text-[18px] text-left border rounded-sm border-[#9EB5C7]"
                  aria-label={`Select ${item}`}
                >
                  <Link href="/">{item}</Link>
                </button>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className=" ">
            <h3 className="text-[#136FB6] text-[22px] font-semibold md:mx-2 mx-4 mb-1 flex items-center justify-between w-[5rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              More{" "}
            </h3>

            <div className=" pt-2 mx-3 md:mx-0 flex flex-col md:block ">
              {More.map((item, index) => (
                <button
                  key={index}
                  className="px-3 py-2 mx-2.5 my-2.5 text-[#8397A6] text-[18px] text-left border rounded-sm border-[#9EB5C7]"
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

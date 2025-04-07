import {
  postgraduateDegrees,
  schoolClasses,
  undergraduateDegrees,
} from "@/utils/constant";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getClasses, getStates, getBoard, getCity, getSubjects } from "@/api/tutor.api";

const CourseAdviceCard = () => {
  const [classLevels, setClassLevels] = useState([]);
  const [states, setStates] = useState([]);
  const [boards, setBoards] = useState([]);
  const [cities, setCities] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [classesData, statesData, boardsData, citiesData, subjectsData] =
          await Promise.all([
            getClasses(),
            getStates(),
            getBoard(),
            getCity(),
            getSubjects(),
          ]);
        console.log(classesData, "classesData");
        setClassLevels(classesData || []);
        console.log(classLevels, "classLevels");
        setStates(statesData || []);
        setBoards(boardsData || []);
        setCities(citiesData || []);
        setSubjects(subjectsData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const Languages = [
    { name: "Spoken English", slug: "spoken-english" },
    { name: "IELTS", slug: "ielts" },
    { name: "French Language", slug: "french-language" },
    { name: "PTE", slug: "pte" },
    { name: "Spanish Language", slug: "spanish-language" },
    { name: "TOEFL", slug: "toefl" },
    { name: "German Language", slug: "german-language" },
    { name: "Hindi Language", slug: "hindi-language" },
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
            <div className="pt-2 pl-1 md:pl-0">
              {classLevels.map((item, index) => (
                <button
                  key={index}
                  className="p-2 m-1 md:m-2  text-[#8397A6] md:text-[18px]  text-left border rounded-md border-[#9EB5C7]"
                >
                  <Link href={`/teacher-list?level=${item.name?.toLowerCase().replace(/ /g, '-')}`}>
                    {item.name} Tution
                  </Link>
                </button>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="mt-2 pl-2 md:pl-0 md:mt-0">
            <h3 className="text-[#136FB6] md:mx-2 mx-4 text-[22px] font-semibold mb-3 flex items-center justify-between w-[8.5rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              Languages
            </h3>
            <div className="pt-2 mx-2 md:mx-0 mb-4 pb-4 md:pb-0 md:mb-0">
              {Languages.map((item, index) => (
                <button
                  key={index}
                  className="px-4 py-2 m-1 md:m-2 text-[#8397A6] md:text-[18px] text-left border rounded-md border-[#9EB5C7]"
                >
                  <Link
                    href={`/teacher-list?level=${[index].slug}&subject=${item.slug}`}
                  >
                    {item.name}
                  </Link>
                </button>
              ))}
            </div>
          </div>

          {/* Subjects Section */}
          <div className="mt-2 pl-2 md:pl-0 md:mt-0">
            <h3 className="text-[#136FB6] md:mx-2 mx-4 text-[22px] font-semibold mb-3 flex items-center justify-between w-[8.5rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              Subjects
            </h3>
            <div className="pt-2 mx-2 md:mx-0 mb-4 pb-4 md:pb-0 md:mb-0">
              {subjects?.map((item, index) => (
                <button
                  key={index}
                  className="px-4 py-2 m-1 md:m-2 text-[#8397A6] md:text-[18px] text-left border rounded-md border-[#9EB5C7]"
                >
                  <Link href={`/teacher-list?subject=${item.name?.toLowerCase().replace(/ /g, '-')}`}>
                    {item.name}
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="md:w-[48%] bg-[#F6FBFF] md:p-4 border-t-4 border-t-[#1BADFF] rounded-lg space-y-6">
          {/* States Section */}
          <div className="mt-2 pl-3 md:pl-0 md:mt-0">
            <h3 className="text-[#136FB6] mx-2 text-[22px] font-semibold mb-2 flex items-center justify-between w-[6.8rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              States
            </h3>
            <div className="pl-1 md:pl-0 md:mx-0 pt-2">
              {states?.map((item, index) => (
                <button
                  key={index}
                  className="px-3 py-2 md:m-2 m-1 text-[#8397A6] md:text-[18px] text-left border rounded-md border-[#9EB5C7]"
                >
                  <Link href={`/teacher-list?state=${item.name?.toLowerCase().replace(/ /g, '-')}`}>{item.name}</Link>
                </button>
              ))}
            </div>
          </div>

          {/* Cities Section */}
          <div className="mt-2 pl-3 md:pl-0 md:mt-0">
            <h3 className="text-[#136FB6] mx-2 text-[22px] font-semibold mb-2 flex items-center justify-between w-[6.8rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              Cities
            </h3>
            <div className="pl-1 md:pl-0 md:mx-0 pt-2">
              {cities?.map((item, index) => (
                <button
                  key={index}
                  className="px-3 py-2 md:m-2 m-1 text-[#8397A6] md:text-[18px] text-left border rounded-md border-[#9EB5C7]"
                >
                  <Link href={`/teacher-list?city=${item.name?.toLowerCase().replace(/ /g, '-')}`}>{item.name}</Link>
                </button>
              ))}
            </div>
          </div>

          {/* Boards Section */}
          <div className="mt-2 pl-3 md:pl-0 md:mt-0">
            <h3 className="text-[#136FB6] mx-2 text-[22px] font-semibold mb-2 flex items-center justify-between w-[6.8rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              Boards
            </h3>
            <div className="pl-1 md:pl-0 md:mx-0 pt-2">
              {boards?.map((item, index) => (
                <button
                  key={index}
                  className="px-3 py-2 md:m-2 m-1 text-[#8397A6] md:text-[18px] text-left border rounded-md border-[#9EB5C7]"
                >
                  <Link href={`/teacher-list?board=${item.name?.toLowerCase().replace(/ /g, '-')}`}>{item.name}</Link>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-2 pl-3 md:pl-0 md:mt-0">
            <h3 className="text-[#136FB6] mx-2 text-[22px] font-semibold mb-2 flex items-center justify-between w-[6.8rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              Hobbies{" "}
            </h3>
            <div className="pl-1 md:pl-0 md:mx-0 pt-2">
              {Hobbies.map((item, index) => (
                <button
                  key={index}
                  className="px-3 py-2 md:m-2 m-1 text-[#8397A6] md:text-[18px] text-left border rounded-md border-[#9EB5C7]"
                  aria-label={`Select ${item}`}
                >
                  <Link href="/">{item}</Link>
                </button>
              ))}
            </div>
          </div>

          {/* More Section */}
          <div className="pl-3 md:pl-0">
            <h3 className="text-[#136FB6] text-[22px] font-semibold mx-2 mb-1 flex items-center justify-between w-[5rem]">
              <span className="w-1.5 h-1.5 bg-[#136FB6] rounded-full text-[22px]" />
              More{" "}
            </h3>

            <div className="pb-4 pt-2 mx-1 md:mx-0 flex flex-wrap md:block">
              {More.map((item, index) => (
                <button
                  key={index}
                  className="px-3 py-2 m-1 md:m-2 text-[#8397A6] md:text-[18px] text-left border rounded-md border-[#9EB5C7]"
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

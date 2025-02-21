import Link from "next/link";

const TeacherListCard = ({ tutor , level}) => {
  console.log(level)
  const { personalInfo, educationInfo, profileDescription,subjects,teachingDetails } = tutor;
  console.log(subjects)
  const sortedSubject = subjects?.sort((a, _) => {
    const classANumberFrom = parseInt(a?.fromLevel.split("-")[1]) // 3
    const classANumberTo = parseInt(a?.toLevel.split("-")[1]) // 8
    const classArange = new Array(classANumberTo - classANumberFrom + 1).fill().map((_, idx) => classANumberFrom + idx)
    const levelNUmber = parseInt(level.split("-")[1])
    return classArange.includes(levelNUmber) ? -1 : 1
  })

  console.log(sortedSubject)
  return (
    <div className=" text-[#01354B]  border p-4 bg-[#EFF7FC] space-y-4 rounded-md ">
      <h1 className="text-[20px] truncate font-semibold pt-3">
        {personalInfo?.fullName}
        <span className="text-[12px] pl-2 text-[#1BADFF]">
          ({educationInfo[0]?.degreeName})
        </span>
      </h1>
      <div className=" h-[60px] ">
        {
          sortedSubject?.slice(0,2 ).map((data)=>(
            <button className="border m-1 rounded-xl px-2 text-xs py-1 border-[#01354B]">
              {data?.subject} {data?.fromLevel} - {data?.toLevel}
            </button>
          ))
        }
      </div>
   
      <p className="text-[16px] text-[#667681]">
     {profileDescription?.description}
      
      </p>

      <div className="text-[#136FB6] flex justify-between pb-6 font-medium ">
        <span >{teachingDetails?.charge}</span>
        <span>{personalInfo?.city}</span>
        <span>{teachingDetails?.totalYearOfExperience
        }</span>
      </div>
      <Link href={`/profile/${tutor._id}`}>
      <button
      
      className="text-[#136FB6] text-[17.36px]  border border-[#136FB6] w-full py-2 font-bold">
        
        Veiw Profile
      </button>
      </Link>
    </div>
  );
};

export default TeacherListCard;

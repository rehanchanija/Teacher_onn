import Link from "next/link";

const TeacherListCard = ({ tutor, level }) => {
  const { personalInfo, educationInfo, profileDescription, subjects, teachingDetails } = tutor;

  const sortedSubject = subjects?.sort((a, _) => {
    // Convert class level to comparable format
    const currentLevel = level?.toLowerCase().replace(/ /g, '-');
    const fromLevel = a?.fromLevel?.toLowerCase().replace(/ /g, '-');
    const toLevel = a?.toLevel?.toLowerCase().replace(/ /g, '-');

    // Compare based on slugified names
    const isInRange = fromLevel <= currentLevel && currentLevel <= toLevel;
    return isInRange ? -1 : 1;
  });

  return (
    <div className="text-[#01354B] border p-4 bg-[#EFF7FC] space-y-4 rounded-md">
      <h1 className="text-[20px] truncate font-semibold pt-3">
        {personalInfo?.fullName}
        <span className="text-[12px] pl-2 text-[#1BADFF]">
          ({educationInfo[0]?.degreeName})
        </span>
      </h1>
      <div className="h-[60px]">
        {sortedSubject?.slice(0, 2).map((data, index) => (
          <button
            key={index}
            className="border m-1 rounded-xl px-2 text-xs py-1 border-[#01354B]"
          >
            {data?.subject} {data?.fromLevel?.replace(/-/g, ' ')} - {data?.toLevel?.replace(/-/g, ' ')}
          </button>
        ))}
      </div>

      <p className="text-[16px] text-[#667681]">
        {profileDescription?.description}
      </p>

      <div className="text-[#136FB6] flex justify-between pb-6 font-medium">
        <span>{teachingDetails?.charge}</span>
        <span>{personalInfo?.city}</span>
        <span>{teachingDetails?.totalYearOfExperience}</span>
      </div>
      <Link href={`/profile/${tutor._id}?level=${level?.toLowerCase().replace(/ /g, '-')}`}>
        <button className="text-[#136FB6] text-[17.36px] border border-[#136FB6] w-full py-2 font-bold">
          View Profile
        </button>
      </Link>
    </div>
  );
};

export default TeacherListCard;

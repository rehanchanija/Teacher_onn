import Link from "next/link";
import PersonalInfo from "../Editprofile/PersonalInfo";

const TeacherListCard = ({ tutor }) => {
  const { personalInfo, educationInfo, profileDescription,subjects,teachingDetails } = tutor;
  console.log(tutor)
  return (
    <div className=" text-[#01354B]  border p-4 bg-[#EFF7FC] space-y-4 rounded-md ">
      <h1 className="text-[20px] truncate font-semibold pt-3">
        {personalInfo?.fullName}
        <span className="text-[16px] pl-2 text-[#1BADFF]">
          ({educationInfo[0]?.degreeName})
        </span>
      </h1>
      <div className="space-x-6">
        {
          subjects?.slice(0,2).map((data)=>(
            <button className="border px-2 border-[#01354B]">
              {data?.subject}
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

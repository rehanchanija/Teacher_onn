import StudentCard from "../Cards/StudentCard";
import TeachingCard from "../Cards/TeachingCard";

const StudentTeaching = () => {
  return (
    <div className="md:flex md:space-x-8 md:mt-12   ">
      <StudentCard />
      <TeachingCard />
    </div>
  );
};

export default StudentTeaching;

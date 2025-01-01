import StudentCard from "../Cards/StudentCard";
import TeachingCard from "../Cards/TeachingCard";

const StudentTeaching = () => {
  return (
    <div className="md:flex mx-4 my-12 ">
      <StudentCard />
      <TeachingCard />
    </div>
  );
};

export default StudentTeaching;

import CourseAdvice from "@/components/Homepage/CourseAdvice";
import FeautureProfile from "@/components/Homepage/FeautureProfile";
import Learning from "@/components/Homepage/Learning";
import LiveClasses from "@/components/Homepage/LiveClasses";
import TutorsPage from "@/components/Homepage/TutorsPage";

export default function Home() {
  return (
    <div>
      <div className="md:space-y-20 space-y-8">
        <TutorsPage />
        <Learning />
        <FeautureProfile />
        <div className="md:mx-12 mx-2">
          <LiveClasses />
        </div>
        <div className="md:mx-12 mx-2">
          <CourseAdvice />
        </div>
      </div>
      {/* <Reveiw />
      <Premium />
      <StudentTeaching />
      <AdmissionEnroll />
      <OnlineStore />
      <DirectionalClasses />
      <Footer /> */}
    </div>
  );
}

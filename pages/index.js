
import AdmissionEnroll from "@/components/Homepage/AdmissionEnroll";
import CourseAdvice from "@/components/Homepage/CourseAdvice";
import DirectionalClasses from "@/components/Homepage/DirectionalClasses";
import FeautureProfile from "@/components/Homepage/FeautureProfile";
import Learning from "@/components/Homepage/Learning";
import LiveClasses from "@/components/Homepage/LiveClasses";
import OnlineStore from "@/components/Homepage/OnlineStore";
import Premium from "@/components/Homepage/Premium";
import Reveiw from "@/components/Homepage/Reveiw";
import StudentTeaching from "@/components/Homepage/StudentTeaching";
import Testimonals from "@/components/Homepage/Testimonal";
import TutorsJob from "@/components/Homepage/TutorsJob";
import TutorsPage from "@/components/Homepage/TutorsPage";

export default function Home() {
  return (
    <div>
      <div className="md:space-y-20 space-y-8">
        <TutorsPage />
        <Learning />
        <FeautureProfile />
        <div className="md:mx-12 ">
          <LiveClasses />
        </div>
        <div className="md:mx-12 ">
          <CourseAdvice />
        </div>
        <div className="py-4 mx-2 ">

          <Reveiw />
        </div>
        <Premium />
      </div>
      <div className="md:mx-12  md:space-y-20 space-y-8">


        <StudentTeaching />
        <AdmissionEnroll />
        <OnlineStore />
        <Testimonals />
      </div>
      <DirectionalClasses />


      {/* <EditProfile /> */}
      <TutorsJob
      />
    </div>
  );
}

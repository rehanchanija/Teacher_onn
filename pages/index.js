import Education from "@/components/Editprofile/Education";
import PersonalInfo from "@/components/Editprofile/PersonalInfo";
import Subject from "@/components/Editprofile/Subject";
import Footer from "@/components/Footer.js/Footer";
import CourseAdvice from "@/components/Homepage/CourseAdvice";
import DirectionalClasses from "@/components/Homepage/DirectionalClasses";
import FeautureProfile from "@/components/Homepage/FeautureProfile";
import Learning from "@/components/Homepage/Learning";
import LiveClasses from "@/components/Homepage/LiveClasses";

export default function Home() {
  return (
    <div>
      <div className="md:space-y-20 space-y-8">
        {/* <TutorsPage />
        <Learning />
        <FeautureProfile /> */}
        <div className="md:mx-12 mx-2">
          <LiveClasses />
        </div>
        <div className="md:mx-12 mx-2">
          <CourseAdvice />
        </div>
        <div className="py-4">

          <Premium />
        </div>
      </div>
      {/* <Reveiw />/ */}
      <div className="md:mx-12 md:space-y-20">


        <StudentTeaching />
        <AdmissionEnroll />
        <OnlineStore />
        <Testimonals />
      </div>
      <DirectionalClasses />
      {/* <PersonalInfo />
      <Education />
      <Subject />
      <Footer />
    </div>
  );
}
  
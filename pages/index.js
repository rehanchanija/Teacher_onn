import Education from "@/components/Editprofile/Education";
import PersonalInfo from "@/components/Editprofile/PersonalInfo";
import Subject from "@/components/Editprofile/Subject";
import Footer from "@/components/Footer.js/Footer";
import CourseAdvice from "@/components/Homepage/CourseAdvice";
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
          <CourseAdvice />{" "}
        </div>
      </div>
      {/* <Reveiw /> */}
      {/* <Premium />
      <StudentTeaching />
      <AdmissionEnroll />
      <OnlineStore />
      <DirectionalClasses />
      <Footer /> */}
      <PersonalInfo />
      <Education />
      <Subject />
      <Footer />
    </div>
  );
}

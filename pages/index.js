import Course from "@/components/Editprofile/Course";
import Education from "@/components/Editprofile/Education";
import Experience from "@/components/Editprofile/Experience";
import PersonalInfo from "@/components/Editprofile/PersonalInfo";
import ProfileDescription from "@/components/Editprofile/ProfileDescription";
import Subject from "@/components/Editprofile/Subject";
import TeachingDetail from "@/components/Editprofile/TeachingDetail";
import Footer from "@/components/Footer.js/Footer";
import CourseAdvice from "@/components/Homepage/CourseAdvice";
import LiveClasses from "@/components/Homepage/LiveClasses";
import MyProfile from "@/components/MyProfile/MyProfile";
import Store from "@/components/Store";

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
      <Experience />
      <TeachingDetail />
      <ProfileDescription />
      <Course />
      <Store />
      <MyProfile />
      {/* <Filter /> */}
      <Footer />

    </div>
  );
}

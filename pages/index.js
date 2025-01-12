import Course from "@/components/Editprofile/Course";
import Education from "@/components/Editprofile/Education";
import Experience from "@/components/Editprofile/Experience";
import PersonalInfo from "@/components/Editprofile/PersonalInfo";
import ProfileDescription from "@/components/Editprofile/ProfileDescription";
import Subject from "@/components/Editprofile/Subject";
import TeachingDetail from "@/components/Editprofile/TeachingDetail";
import AdmissionEnroll from "@/components/Homepage/AdmissionEnroll";
import CourseAdvice from "@/components/Homepage/CourseAdvice";
import DirectionalClasses from "@/components/Homepage/DirectionalClasses";
import LiveClasses from "@/components/Homepage/LiveClasses";
import OnlineStore from "@/components/Homepage/OnlineStore";
import Premium from "@/components/Homepage/Premium";
import StudentTeaching from "@/components/Homepage/StudentTeaching";
import Testimonals from "@/components/Homepage/Testimonal";
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
      {/* {/* <PersonalInfo /> */}
      <Education />
      <Subject />
      <Course />
      <Experience />
      <PersonalInfo />
      <ProfileDescription />
      <Subject />
      <TeachingDetail />
      <MyProfile />
      <Store />
      {/* <Footer /> */}
    </div>
  );
}

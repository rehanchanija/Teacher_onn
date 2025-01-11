<<<<<<< HEAD
import AdmissionEnroll from "@/components/Homepage/AdmissionEnroll";
=======
import Education from "@/components/Editprofile/Education";
import PersonalInfo from "@/components/Editprofile/PersonalInfo";
import Subject from "@/components/Editprofile/Subject";
import Footer from "@/components/Footer.js/Footer";
>>>>>>> fcb368989cb74daa3c84143977b956db0da92a5f
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
// import LiveClasses from "@/components/Homepage/LiveClasses";

export default function Home() {
  return (
    <div>
      <div className="md:space-y-20 space-y-8">
        {/* <TutorsPage /> */}
         <Learning />
        <FeautureProfile     /> 
        <div className="md:mx-2 mx-2">
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
<<<<<<< HEAD
     
     <Testimonals/> {/* <DirectionalClasses /> */}
</div>
=======
      <DirectionalClasses />
      <Footer /> */}
      <PersonalInfo />
      <Education />
      <Subject />
      <Footer />
>>>>>>> fcb368989cb74daa3c84143977b956db0da92a5f
    </div>
  );
}

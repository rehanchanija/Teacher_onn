
import { getTutor } from "@/api/tutor.api";
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
import { dehydrate, QueryClient } from '@tanstack/react-query'

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
        <div className="md:mx-8 ">
          <CourseAdvice />
        </div>
        <div className="py-4  ">

          <Reveiw />
        </div>
        <Premium />
      </div>
      <div className="md:mx-8   md:space-y-20 space-y-8">


        <StudentTeaching />
        <AdmissionEnroll />
        <OnlineStore />
        <Testimonals />
      </div>
      {/* <DirectionalClasses /> */}


      {/* <EditProfile /> */}
      {/* <TutorsJob /> */}
    </div>
  );
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery({
//     queryKey: ['GET_TUTOR'],
//     queryFn: () => getTutor(),
//   })

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }


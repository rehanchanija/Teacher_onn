import React from 'react'

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
import TutorsPage from "@/components/Homepage/TutorsPage";
import { dehydrate, QueryClient } from '@tanstack/react-query'
import TutorHome from './Homepage/TutorHome';

const Homepage = () => {
    return (
        <div>
            <div className="md:space-y-0 space-y-8">
                <TutorsPage />
                <TutorHome />
            </div>

            <div className='pt-40 pb-20'>
                <Learning />

            </div>
            <FeautureProfile />
            <div className="md:mx-12 pt-24 ">
                <LiveClasses />
            </div>
            <div className="md:mx-12 mx-4 pt-24">
                <CourseAdvice />
            </div>
            <div className="pt-24 pb-24  ">
                <Reveiw />
            </div>
            <Premium />
            <div className=" space-y-[6rem]">


                <AdmissionEnroll />
                <OnlineStore />
                <Testimonals />
                <DirectionalClasses />
            </div>



        </div>
    )
}

export default Homepage
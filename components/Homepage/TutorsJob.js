"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TutorsCard from "../Cards/TutorsCard";

const TutorsJob = () => {
    const bgColors = ["bg-[#E1F6CC]", "bg-[#E9EBF8]", "bg-[#E6F1FF]"];

    const combos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>

        <div className='text-white text-center  pt-10 md:pb-24 pb-4     bg-[#146DB2]'>
        <h1 className='text-[56px] font-bold '>
TUTORS JOBS            </h1> 
         <p className='text-20px pb-4' >Get the right job you deserve</p>
     </div>
        {combos.map((combo) => ( 
     <div className="flex mx-4 md:mx-8 my- flex-wrap md:flex-nowrap">
 <TutorsCard key={combo} bgColor="bg-[#E1F6CC]" />
 <TutorsCard key={combo} bgColor="bg-[#E9EBF8]" />
 <TutorsCard key={combo} bgColor="bg-[#E6F1FF]" />      
 
    </div>      
   ))}
     </div>
     
    );
};

export default TutorsJob;
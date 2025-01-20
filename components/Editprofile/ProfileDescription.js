'use client';

// components/ProfileDescriptionForm.js
import { useState } from "react";

const ProfileDescription = ({ handleNext,handlePrevious }) => {
    // States to track the selected radio buttons
    const [travel, setTravel] = useState(null);
    const [onlineTeaching, setOnlineTeaching] = useState(null);
    const [digitalPen, setDigitalPen] = useState(null);
    const [homeworkHelp, setHomeworkHelp] = useState(null);
    const [fullTimeTeacher, setFullTimeTeacher] = useState(null);

    // Function to handle the radio button selection
    const handleTravelChange = (value) => {
        setTravel(value);
        handleNext();
    };

    const handleOnlineTeachingChange = (value) => {
        setOnlineTeaching(value);
    };
    // const handlePrevious = () => {
    //     if (currentStep > 3) {
    //         setCurrentStep(currentStep - 1);
    //     }
    // };

    return (
        <div className="w-full bg-white relative min-h-screen">
            <div className="relative max-w-[1281px] mx-auto shadow-lg -mt-8">
                <div className="p-8 bg-[#F2F6FB]">
                    <h3 className="mb-6 text-[black] font-semibold text-xl">Please enter your profile description.</h3>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-[#4E5865] mb-2">This is the most important section for you. *</p>
                        <p className="text-lg font-semibold text-[#146FB6] mb-2">80% of students will decide if they want to hire you just based on what you write here.</p>
                        <p className="text-base text-[#4E5865] font-semibold italic mb-4">Make sure its good, relevant, in detail, and without mistakes.</p>
                        <p className="text-base text-[#4E5865] font-semibold italic mb-4">Do not copy-paste your resume here.</p>
                        <div className="inline-block bg-[#136EB4] py-1 px-3 rounded mb-4">
                            <p className="text-base font-semibold italic text-white">Do not share any contact details.</p>
                        </div>
                    </div>

                    {/* Profile Description Editor */}
                    <div className="border border-[#0F283C] rounded-lg p-4 md:p-8 bg-[#F2F6FB] mb-6 text-[#0F283C]">
                        <div className="space-y-2">
                            <p>Hello,</p><br />
                            <p>Being a CAIE IGCSE IBDP AS & A Level Certified Educator, I believe in making studies easy and fun learning.</p><br />
                            <p>I prepare with IGCSE AS Level & IBDP application-based exam pattern questions, teaching methodology, and correction guidelines as per board norms.</p><br />
                            <p>Many students under my guidance have bagged A* at 100/100 in board exams, many world toppers and rankers, and have got selected in universities worldwide.</p><br />
                            <p>We customize your classes as per your pace of learning. Whether you need handholding, building fundamentals, or more test series or exam pattern papers, we design the sessions accordingly.</p><br />
                            <p>Apart from explanation of concepts, its also important to analyze how a particular topic is asked in the board exams. After explaining the topic, we discuss exam pattern questions and solutions.</p><br />
                            <p>I have experience teaching IGCSE, ICSE, IBDP AS&A levels for the past 15+ years with a proven track record of phenomenal results every year.</p><br />
                            <p>You can ask for a demo class, see the difference, and decide to enroll.</p><br />
                            <span className="font-bold">
                                <p>IGCSE Chemistry, Maths & Physics, Biology</p>
                                <p>IBDP Math HL SL, AS/A Level Maths</p><br />
                                <p>ICSE Chemistry, Physics, Biology, Maths.</p>
                            </span>
                        </div>
                    </div>

                    {/* Power Profile Section */}
                    <div className="inline-block bg-[#18A61E] py-2 px-10 rounded mb-4">
                        <p className="text-white text-base font-semibold italic">Power Profile: 95.5%</p>
                    </div>

                    {/* Checkbox */}
                    <div className="mb-6">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-base text-[#4E5865]">I have not shared any contact details (Email, Phone, Skype, Website, etc)</span>
                        </label>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-start gap-2">
                        <button className="px-4 md:px-6 py-2 border border-[#0F283C] font-bold text-[#0F283C] w-[179px] h-[52px] rounded text-base"
                        onClick={handlePrevious}
                        >
                            &lt;&lt; Previous
                        </button>
                        <button
                            onClick={handleTravelChange}
                            className="px-4 md:px-6 py-2 bg-[#0B1F36] text-white rounded w-[179px] h-[52px] font-bold text-base">
                            Next &gt;&gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDescription;

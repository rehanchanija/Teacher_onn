'use client';
// // components/TeachingDetailForm.js
import { useState } from "react";

const ProfileDescription = () => {
    // States to track the selected radio buttons
    const [travel, setTravel] = useState(null);
    const [onlineTeaching, setOnlineTeaching] = useState(null);
    const [digitalPen, setDigitalPen] = useState(null);
    const [homeworkHelp, setHomeworkHelp] = useState(null);
    const [fullTimeTeacher, setFullTimeTeacher] = useState(null);

    // Function to handle the radio button selection
    const handleTravelChange = (value) => {
        setTravel(value);
    };

    const handleOnlineTeachingChange = (value) => {
        setOnlineTeaching(value);
    };





    return (
        <div className="bg-white min-h-screen  flex flex-col items-center">




            {/* Profile Description Content */}
            <div className="p-4 md:p-8 bg-[#F2F6FB] max-w-[1281px] flex-1">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Profile description</h2>
                    <p className="text-base  font-semibold text-[#4E5865] mb-2">This is the most important section for you. *</p>
                    <p className="text-lg font-semibold text-[#146FB6] mb-2">80% of students will decide if they want to hire you just based on what you write here.</p>
                    <p className="text-base text-[#4E5865] font-semibold italic mb-4">Make sure it's good, relevant, in detail, and without mistakes.</p>
                    <p className="text-base text-[#4E5865] font-semibold italic mb-4">Do not copy-paste your resume here.</p>
                    <div className="inline-block bg-[#136EB4] py-1 px-3 rounded mb-4">
                        <p className="text-base font-semibold italic text-white">Do not share any contact details.</p>
                    </div>
                </div>

                {/* Text Editor Area */}
                <div className="border border-[#0F283C] rounded-lg p-4 md:p-8 bg-[#F2F6FB] mb-6 text-[#0F283C]">
                    <div className="space-y-2">
                        <p>Hello,</p><br />
                        <p>Being a CAIE IGCSE IBDP AS & A Level Certified Educator I believe in making Studies easy and fun learning.</p><br />
                        <p>I prepare with IGCSE AS Level & IBDP application based exam pattern questions, teaching methodology and correction guidelines as per board norms.</p><br />
                        <p>Many students under my guidance have bagged A* at 100/100 in board exams, many world toppers and Rankers throughout and have got selected in Universities worldwide.</p><br />
                        <p>We customize your classes as per your pace of learning, if you need handholding, building fundamentals or more of test series or exam pattern papers we design the sessions accordingly.</p><br />
                        <p>Apart from explanation of concepts it's also important to analyse how a particular topic is asked in the board exams. After explanation of topic we discuss exam pattern questions and solutions</p><br />
                        <p>I have a experience of teaching IGCSE and ICSE IBDP AS&A levels from past 15+ years with proven track of phenomenal results every year.</p><br />
                        <p>You can ask for a demo class, see the difference and decide to enroll.</p><br />
                        <span className="font-bold">
                            <p>IGCSE Chemistry, Maths & Physics, Biology</p>
                            <p>IBDP Math HL SL, ASALevel Maths</p><br />
                            <p>ICSE Chemistry physics biology maths.</p>
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
                        <span className="text-base text-[#4E5865]">I have not shared any contact details (Email, Phone, Skype, Website etc)</span>
                    </label>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-start gap-2">
                    <button className="px-4 md:px-6 py-2 border border-[#0F283C] font-bold text-[#0F283C] w-[179px] h-[52px] rounded text-base">&lt;&lt; Previous</button>
                    <button className="px-4 md:px-6 py-2 bg-[#0B1F36] text-white rounded w-[179px] h-[52px] font-bold text-base">Submit &gt;&gt;</button>
                </div>
            </div>
        </div>

    );
};

export default ProfileDescription;

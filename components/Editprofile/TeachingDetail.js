'use client';

// components/TeachingDetailForm.js
import { useState } from "react";

const TeachingDetail = ({ handleNext }) => {

    const [travel, setTravel] = useState(null);
    const [onlineTeaching, setOnlineTeaching] = useState(null);
    const [digitalPen, setDigitalPen] = useState(null);
    const [homeworkHelp, setHomeworkHelp] = useState(null);
    const [fullTimeTeacher, setFullTimeTeacher] = useState(null);

    const handleTravelChange = (value) => setTravel(value);
    const handleOnlineTeachingChange = (value) => setOnlineTeaching(value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const allFieldsFilled = travel && onlineTeaching && digitalPen && homeworkHelp && fullTimeTeacher;
        if (allFieldsFilled) {
        } else {
            alert("Please fill in all fields");
        }
        handleNext();
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
                    <h3 className="mb-6 text-[black] font-semibold text-xl">Please enter your teaching details.</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Form Fields */}
                        {[
                            { label: "I charge", placeholder: "Enter here" },
                            { label: "Minimum fee", placeholder: "Enter here" },
                            { label: "Maximum fee", placeholder: "Enter here" },
                            { label: "Fee Details", placeholder: "Enter here" },
                            { label: "Years of total experience", placeholder: "Enter here" },
                            { label: "Years of total teaching experience", placeholder: "Enter here" },
                            { label: "Years of online teaching experience", placeholder: "Enter here" },
                        ].map(({ label, placeholder }, index) => (
                            <div key={index} className="flex flex-col">
                                <label className="text-gray-700 font-medium mb-2">
                                    {label} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="border border-gray-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder={placeholder}
                                />
                            </div>
                        ))}

                        {/* Radio Buttons */}
                        {[
                            { label: "Are you willing to travel to Student?", value: travel, setter: setTravel },
                            { label: "Available for online teaching?", value: onlineTeaching, setter: setOnlineTeaching },
                            { label: "Do you have a digital pen?", value: digitalPen, setter: setDigitalPen },
                            { label: "Do you help with homework and assignments?", value: homeworkHelp, setter: setHomeworkHelp },
                            { label: "Are you a full-time teacher employed by a school/college?", value: fullTimeTeacher, setter: setFullTimeTeacher }
                        ].map(({ label, value, setter }, index) => (
                            <div key={index} className="flex flex-col">
                                <label className="text-gray-700 font-medium mb-2">
                                    {label} <span className="text-red-500">*</span>
                                </label>
                                <div className="flex items-center space-x-4">
                                    {["yes", "no"].map((option) => (
                                        <label
                                            className="flex items-center cursor-pointer"
                                            key={option}
                                            onClick={() => setter(option)}
                                        >
                                            <div
                                                className={`w-5 h-5 border-2 rounded-full flex justify-center items-center mr-2 ${value === option ? "bg-blue-500 border-blue-500" : "border-gray-500"}`}
                                            >
                                                {value === option && <span className="text-white text-lg">✓</span>}
                                            </div>
                                            <span className="text-gray-600 capitalize">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Dropdown */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium mb-2">
                                Opportunities you are interested in <span className="text-red-500">*</span>
                            </label>
                            <select
                                className="border border-gray-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                defaultValue=""
                            >
                                <option value="" disabled>Select here</option>
                                {["0-1 years", "1-3 years", "3-5 years", "5-10 years", "10+ years"].map((option) => (
                                    <option value={option} key={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    </form>

                    {/* Buttons */}
                    <div className="flex justify-left items-center mt-8">
                        <button
                            className="w-[179px] h-[52px] border border-[#0F283C] text-[#0F283C] font-bold text-sm rounded-[2px]"
                        // onClick={handlePrevious}
                        >
                            &lt;&lt; Previous
                        </button>
                        <button
                            type="submit"
                            className="w-[179px] h-[52px] ml-4 bg-[#0B1F36] text-white font-bold text-sm rounded-[4px]"
                        >
                            Submit &gt;&gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachingDetail;

"use client";
import Image from "next/image";
import { useState } from "react";

const Subject = ({ handleNext, }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const educationData = [
        { subject: "ICSE Maths", grade: "(Grade 8 - Grade 10)" },
        { subject: "IGCSE Maths" },
        { subject: "ICSE Chemistry", grade: "(Grade 9 - Grade 10)" },
        { subject: "IBDP Maths SL/HL" },
        { subject: "IBDP Math SL/HL" },
        { subject: "AS & A level Mathematics" },
        { subject: "IGCSE Business studies" },
        { subject: "IGCSE Economics" },
        { subject: "IGCSE 9-1 Chemistry" },
    ];


    const [subject, setSubject] = useState("");
    const [fromLevel, setFromLevel] = useState("");
    const [toLevel, setToLevel] = useState("");

    const handleSave = () => {
        if (!subject || !fromLevel || !toLevel) {
            alert("Please fill in all the required fields.");
            handleNext();
            // } else {
            //     window.location.href = "/experience";
            // }
        };
        // const handlePrevious = () => {
        //     if (currentStep > 1) {
        //         setCurrentStep(currentStep - 1);
        //     }
    };

    return (
        <div className="min-h-screen w-full bg-white">
            {/* Main Content */}
            <div className="w-full bg-white">
                <div className="relative max-w-[1281px] mx-auto shadow-lg -mt-8">
                    {/* Navigation */}
                    <div className="py-4 px-4 md:px-10 bg-white rounded-t-lg shadow">
                        <div className="flex justify-between items-center">
                            {/* Hamburger Icon */}
                            <button
                                className="text-gray-700 md:hidden focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? (
                                    <svg
                                        className="w-8 h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-8 h-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Education Cards */}
                    <div className="p-6 bg-[#F2F6FB]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {educationData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 bg-white p-4 rounded-md border border-gray-300 shadow-sm"
                                >
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-gray-800">{item.subject}</h3>
                                        {item.grade && <p className="text-sm text-gray-600">{item.grade}</p>}
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            className=" text-white rounded-full focus:outline-none"
                                            aria-label="Edit"
                                        >
                                            <Image
                                                src="/edit.png"
                                                alt="Edit Icon"
                                                width={42}
                                                height={42}

                                                className=" mx-auto"
                                            />
                                        </button>
                                        <button
                                            className=" text-white rounded-full focus:outline-none"
                                            aria-label="Remove"
                                        >
                                            <Image
                                                src="/delete.png"
                                                alt="Remove Icon"
                                                width={42}
                                                height={42}

                                                className=" mx-auto"
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Add Education Form */}
                    <div className="p-6 bg-[#F2F6FB]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                            {[{
                                label: "Subject",
                                value: subject,
                                setter: setSubject,
                                options: educationData.map(item => item.subject)
                            },
                            {
                                label: "From level",
                                value: fromLevel,
                                setter: setFromLevel,
                                options: ["Grade 1", "Grade 2", "Grade 3"],
                            },
                            {
                                label: "To level",
                                value: toLevel,
                                setter: setToLevel,
                                options: ["Grade 1", "Grade 2", "Grade 3"],
                            },
                            ].map(({ label, value, setter, options }, idx) => (
                                <div key={idx}>
                                    <label className="block font-bold mb-1 text-gray-800">
                                        {label} <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-600"
                                        value={value}
                                        onChange={(e) => setter(e.target.value)}
                                    >
                                        <option value="">Select here</option>
                                        {options.map((opt, i) => (
                                            <option key={i} value={opt}>
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>

                        <p className="text-red-500 text-sm mt-2">
                            If not in options above, add a new subject.
                        </p>

                        {/* Buttons */}
                        <div className="flex justify-start items-center mt-6 gap-4">
                            <button
                                className="w-40 h-12 border border-gray-700 text-gray-700 font-bold rounded-md"
                            // onClick={handlePrevious}
                            >
                                &lt;&lt; Previous
                            </button>
                            <button
                                className="w-40 h-12 bg-[#0F283C] text-white font-bold rounded-md "
                                onClick={handleSave}
                            >
                                Update &gt;&gt;
                            </button>
                        </div>

                        {/* Clickable Divs */}
                        <div className="mt-6">
                            <h3 className="font-bold text-gray-800 mb-2">Quick Select:</h3>
                            <div className="flex gap-4">
                                {["Class", "Board"].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="cursor-pointer border border-gray-300 rounded-md p-3 bg-white text-gray-600 hover:bg-gray-100"
                                        onClick={() => setSubject(item)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Subject;

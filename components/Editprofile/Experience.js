"use client";
import Image from "next/image";
import { useState } from "react";

const Experience = ({ handleNext, currentStep, setCurrentStep }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const educationData = [
        { subject: "Teacher / Professor", location: "Noida, Uttar Pradesh, India · On-site", grade: "Full-time · 2 yrs 5 mos" },
        { subject: "Teacher / Professor", location: "Noida, Uttar Pradesh, India · On-site", grade: "Full-time · 2 yrs 5 mos" },
        { subject: "Teacher / Professor", location: "Noida, Uttar Pradesh, India · On-site", grade: "Full-time · 2 yrs 5 mos" },
    ];


    // State for form fields
    const [organization, setOrganization] = useState("");
    const [designation, setDesignation] = useState("");
    const [startMonth, setStartMonth] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endDate, setEndDate] = useState("");
    const [association, setAssociation] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    // Function to handle save button click
    const handleSave = () => {
        if (
            organization &&
            designation &&
            startMonth &&
            startYear &&
            endDate &&
            association &&
            jobDescription
        ) {
        } else {
            alert("Please fill in all required fields.");
        }
        handleNext();

    };
    const handlePrevious = () => {
        if (currentStep > 2) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="min-h-screen w-full bg-white">
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
                                    <p className="text-sm text-gray-600">{item.location}</p>
                                    {item.grade && <p className="text-sm text-gray-600">{item.grade}</p>}
                                </div>
                                <div className="flex gap-2">
                                    <button className=" text-white rounded-full focus:outline-none" aria-label="Edit">
                                        <Image
                                            src="/edit.png"
                                            alt="Edit Icon"
                                            width={42}
                                            height={42}
                                            className="mx-auto"
                                        />
                                    </button>
                                    <button className=" text-white rounded-full focus:outline-none" aria-label="Remove">
                                        <Image
                                            src="/delete.png"
                                            alt="Remove Icon"
                                            width={42}
                                            height={42}
                                            className="mx-auto"
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Add Experience Form */}
                <div className="p-6 bg-[#F2F6FB]">
                    <h3 className="mb-6 text-black font-semibold text-xl">
                        Please add Teaching and Professional Experience.
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                        {[
                            {
                                label: "Organization",
                                value: organization,
                                setter: setOrganization,
                                type: "text",
                            },
                            {
                                label: "Designation",
                                value: designation,
                                setter: setDesignation,
                                type: "select",
                                options: ["Option 1", "Option 2"],
                            },
                            {
                                label: "Start Date",
                                value: { startMonth, startYear },
                                setter: (key, value) => {
                                    if (key === "startMonth") setStartMonth(value);
                                    if (key === "startYear") setStartYear(value);
                                },
                                type: "date",
                            },
                            {
                                label: "End Date",
                                value: endDate,
                                setter: setEndDate,
                                type: "select",
                                options: ["Jan 2021", "Feb 2021", "Mar 2021"],
                            },
                            {
                                label: "Association",
                                value: association,
                                setter: setAssociation,
                                type: "select",
                                options: ["Option 1", "Option 2", "Option 3"],
                            },
                            {
                                label: "Job Description",
                                value: jobDescription,
                                setter: setJobDescription,
                                type: "text",
                            },
                        ].map(({ label, value, setter, type, options }, idx) => (
                            <div key={idx}>
                                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                                    {label} <span className="text-red-500">*</span>
                                </label>
                                {type === "select" ? (
                                    <select
                                        className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB]"
                                        value={value}
                                        onChange={(e) => setter(e.target.value)}
                                    >
                                        {options.map((opt, i) => (
                                            <option key={i} value={opt}>
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={type}
                                        className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB]"
                                        placeholder="Enter here"
                                        value={value}
                                        onChange={(e) => setter(e.target.value)}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-start items-center mt-6 gap-4">
                        <button
                            className="w-40 h-12 border border-gray-700 text-gray-700 font-bold rounded-md"
                            onClick={handlePrevious}
                        >
                            &lt;&lt; Previous
                        </button>
                        <button
                            className="w-40 h-12 bg-[#0F283C] text-white font-bold rounded-md"
                            onClick={handleSave}
                        >
                            Save &gt;&gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

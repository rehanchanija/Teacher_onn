"use client";
import Image from "next/image";
import { useState } from "react";

const Course = ({ handleSubmit }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const educationData = [
        { subject: "Course", location: "Noida, Uttar Pradesh, India · On-site" },
        { subject: "Course", location: "Noida, Uttar Pradesh, India · On-site" },
        { subject: "Course", location: "Noida, Uttar Pradesh, India · On-site" },
    ];

    // State for form fields
    const [Course_title, setCourse_title] = useState("");
    const [Description, setDescription] = useState("");
    const [Price, setPrice] = useState("");
    const [Currency, setCurrency] = useState("INR");
    const [MOD, setMOD] = useState("Option 1");
    const [Group, setGroup] = useState("Option 1");
    const [Cert, setCert] = useState("Option 1");
    const [CD, setCD] = useState("Option 1");
    const [LOI, setLOI] = useState("");

    // Function to handle save button click
    const handleSave = () => {
        if (
            Course_title &&
            Description &&
            Price &&
            Currency &&
            MOD &&
            Group &&
            Cert &&
            LOI &&
            CD
        ) {
            // router.push("/store");
        } else {
            alert("Please fill in all required fields.");
        }
        handleSubmit();

    };

    const handlePrevious = () => {
        if (currentStep > 3) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="w-full bg-white relative min-h-screen">
            {/* Main Content Area */}
            <div className="w-full bg-white">
                <div className="relative max-w-[1280px] mx-auto shadow-lg -mt-8">
                    {/* Education Cards - Responsive Grid */}
                    <div className="p-6 sm:p-8 bg-[#F2F6FB]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {educationData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 bg-white p-4 rounded border border-[#B4C2D3] shadow-sm"
                                >
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-[#4E5865]">{item.subject}</h3>
                                        <p className="text-[#136AAD] text-sm">{item.location}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="rounded-full w-10 h-10">
                                            <Image
                                                src="/edit.png"
                                                alt="Edit Icon"
                                                width={42}
                                                height={42}
                                                className="mx-auto"
                                            />
                                        </button>
                                        <button className="rounded-full w-10 h-10">
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

                    {/* Add Education Form */}
                    <div className="p-6 sm:p-8 bg-[#F2F6FB]">
                        <h3 className="font-medium mb-6 text-black font-bold">Please add Course I teach.</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Course title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded p-2.5 bg-[#F2F6FB]"
                                    placeholder="Enter here"
                                    value={Course_title}
                                    onChange={(e) => setCourse_title(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Description <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded p-2.5 bg-[#F2F6FB]"
                                    placeholder="Enter here"
                                    value={Description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Price <span className="text-red-500">*</span>
                                </label>
                                <div className="flex border border-gray-300 rounded overflow-hidden">
                                    <input
                                        type="text"
                                        className="flex-grow px-3 py-2 bg-[#F2F6FB] outline-none"
                                        placeholder="Enter here"
                                        value={Price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                    <select
                                        className="bg-[#9EB5C7] text-white text-sm px-2 outline-none cursor-pointer"
                                        value={Currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                    >
                                        <option value="INR">INR</option>
                                        <option value="USD">USD</option>
                                        <option value="JPY">JPY</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Mode Of Delivery <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded p-2.5 bg-[#F2F6FB]"
                                    value={MOD}
                                    onChange={(e) => setMOD(e.target.value)}
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Group Size <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded p-2.5 bg-[#F2F6FB]"
                                    value={Group}
                                    onChange={(e) => setGroup(e.target.value)}
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Certificate Provided <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded p-2.5 bg-[#F2F6FB]"
                                    value={Cert}
                                    onChange={(e) => setCert(e.target.value)}
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Language Of Instructions <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded p-2.5 bg-[#F2F6FB]"
                                    placeholder="Enter here"
                                    value={LOI}
                                    onChange={(e) => setLOI(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Course Duration <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded p-2.5 bg-[#F2F6FB]"
                                    value={CD}
                                    onChange={(e) => setCD(e.target.value)}
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-left items-center mt-8 gap-4">
                            <button
                                className="py-3 px-7 border border-[#0F283C] text-[#0F283C] font-bold rounded"
                                onClick={handlePrevious}
                            >
                                &lt;&lt; Previous
                            </button>
                            <button
                                className="py-3 px-10 bg-[#0B1F36] text-white font-bold rounded"
                                onClick={handleSave}
                            >
                                Save &gt;&gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;

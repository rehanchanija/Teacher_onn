"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Education = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        institutionName: "",
        degreeType: "",
        degreeName: "",
        startDate: "",
        endDate: "",
        association: "",
        speciality: "",
        score: "",
    });
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key] && key !== "endDate") {
                newErrors[key] = "This field is required";
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleSave = () => {
        if (validateForm()) {
            router.push("/subjects"); // Redirect to the Subjects page
        }
    };

    const handlePrevious = () => {
        router.push("/profileedit"); // Redirect to the Profile Edit page
    };

    const educationData = [
        {
            degree: "Mtech Computer science",
            institute: "Kalingo University",
            duration: "(Jun, 2020 - Apr, 2022)",
        },
        {
            degree: "Organization Excellence through Leadership",
            institute: "Indian Institute of Management Bangalore (IIM Bangalore)",
            duration: "(Sep, 2019 - Sep, 2019)",
        },
        {
            degree: "Bachelor of Engineering (BE/IT)",
            institute: "RAIPUR INSTITUTE OF TECHNOLOGY",
            duration: "(Jun, 2005 - Jul, 2009)",
        },
        {
            degree: "IGCSE Extension Course",
            institute: "Cambridge CAIE IGCSE extension Course",
            duration: "(Jan, 2022 - Feb, 2022)",
        },
        {
            degree: "Cambridge IGCSE Extension Course Chemistry",
            institute: "Cambridge CAIE IGCSE extension Course",
            duration: "(Jan, 2019 - Jan, 2019)",
        },
        {
            degree: "Cambridge professional development extension IGCSE Biology",
            institute: "Cambridge professional development Cambridge IGCSE Biology",
            duration: "(May, 2012 - Jul, 2012)",
        },
    ];

    return (
        <div>
            <div className="max-w-5xl sm:max-w-7xl sm:mx-10 bg-white relative">
                <div className="w-full bg-white">
                    <div className="relative max-w-[1281px] mx-auto shadow-lg -mt-8">
                        <div className="w-full bg-white">
                            <div className="relative max-w-[1281px] mx-auto shadow-lg -mt-8">
                                <div
                                    className="relative text-black w-full max-w-[1281px] min-h-[117px] h-auto mt-[-2rem] rounded-tl-lg rounded-tr-lg flex justify-between items-center py-4 md:py-6"
                                    style={{ top: "-10%" }}
                                >
                                    <button
                                        className="sm:hidden text-white"
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>

                                    <div className="p-8 bg-[#F2F6FB]">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {educationData.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-4 bg-[#F2F6FB] p-4 rounded shadow-sm"
                                                >
                                                    <div className="p-2 bg-[#F2F6FB] rounded">
                                                        <Image
                                                            src="/degree.png"
                                                            alt="Institution Logo"
                                                            width={69} // Set the width here
                                                            height={57} // Set the height here
                                                        />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h3 className=" text-[#4E5865] font-bold">
                                                            {item.degree}
                                                        </h3>
                                                        <p className="text-sm ">{item.institute}</p>
                                                        <p className="text-sm ">{item.duration}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <button className=" bg-[#1BADFF] rounded-full w-10 h-10">
                                                            <Image
                                                                src="/edit.png"
                                                                alt="Edit Icon"
                                                                width={42} // Set the width here
                                                                height={42} // Set the height here
                                                                className="mx-auto"
                                                            />
                                                        </button>

                                                        <button className=" bg-[#FF281B] w-10 h-10 rounded-full">
                                                            <Image
                                                                src="/delete.png"
                                                                alt="Remove Icon"
                                                                width={42} // Set the width here
                                                                height={42} // Set the height here
                                                                className=" mx-auto"
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8">
                                            <h3 className="font-medium mb-6 text-black">Add Education/Certification</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                                <div>
                                                    <label className="block text-sm mb-1 text-[#4E5865]">
                                                        Institution name with city <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter here"
                                                        className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] placeholder-[#8397A6]"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm mb-1 text-[#4E5865]">
                                                        Degree Type <span className="text-red-500">*</span>
                                                    </label>
                                                    <select className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB]">
                                                        <option>B tech</option>
                                                        <option>M tech</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm mb-1 text-[#4E5865]">
                                                        Degree Name <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter here"
                                                        className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] placeholder-[#8397A6]"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm mb-1 text-[#4E5865]">
                                                        Start Date <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className="flex gap-4">
                                                        <div className="relative w-full lg:w-[194px]">
                                                            <select className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] pr-10  appearance-none">
                                                                <option>Jan</option>
                                                                <option>Feb</option>
                                                                <option>March</option>
                                                            </select>
                                                            <Image
                                                                src="/date.png"
                                                                alt="Calendar icon"
                                                                width={20} // Set the width here
                                                                height={20} // Set the height here
                                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                                            />
                                                        </div>
                                                        <div className="relative w-full lg:w-[194px]">
                                                            <select className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] pr-10  appearance-none">
                                                                <option>2021</option>
                                                                <option>2022</option>
                                                                <option>2023</option>
                                                                <option>2024</option>
                                                            </select>
                                                            <Image
                                                                src="/date.png"
                                                                alt="Calendar icon"
                                                                width={20} // Set the width here
                                                                height={20} // Set the height here
                                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm mb-1 text-[#4E5865]">
                                                        End Date <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className="flex gap-4">
                                                        <div className="relative w-full lg:w-[194px]">
                                                            <select className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] pr-10 appearance-none">
                                                                <option>Jan</option>
                                                                <option>Feb</option>
                                                                <option>March</option>
                                                            </select>
                                                            <Image
                                                                src="/date.png"
                                                                alt="Calendar icon"
                                                                width={20} // Set the width here
                                                                height={20} // Set the height here
                                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                                            />
                                                        </div>
                                                        <div className="relative w-full lg:w-[194px]">
                                                            <select className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] pr-10  appearance-none">
                                                                <option>2021</option>
                                                                <option>2022</option>
                                                                <option>2023</option>
                                                                <option>2024</option>
                                                            </select>
                                                            <Image
                                                                src="/date.png"
                                                                alt="Calendar icon"
                                                                width={20} // Set the width here
                                                                height={20} // Set the height here
                                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm mb-1 text-[#4E5865]">
                                                        Association <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter here"
                                                        className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] placeholder-[#8397A6]"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm mb-1 text-[#4E5865]">
                                                        Speciality (optional)  <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter here"
                                                        className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] placeholder-[#8397A6]"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm mb-1 text-[#4E5865]">
                                                        Score (optional) <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter here"
                                                        className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] placeholder-[#8397A6]"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 mt-6 sm:justify-start justify-center items-center">
                                                <button
                                                    onClick={handlePrevious}
                                                    className="bg-transparent border border-[#0F283C] text-[#0F283C] py-2 px-7 rounded-md font-bold w-full sm:w-auto"
                                                >
                                                    &gt;&gt; Previous
                                                </button>

                                                <button
                                                    onClick={handleSave}
                                                    className="bg-[#0F283C] text-white py-2 px-12 rounded-md font-bold w-full sm:w-auto"
                                                >
                                                    Save &gt;&gt;
                                                </button>
                                            </div>


                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;

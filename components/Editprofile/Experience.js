
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react"; // Ensure useState is imported

const Experience = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const educationData = [
        { subject: "Teacher / Proffessor", location: "Noida, Uttar Pradesh, India · On-site", grade: "Full-time · 2 yrs 5 mos" },
        { subject: "Teacher / Proffessor", location: "Noida, Uttar Pradesh, India · On-site", grade: "Full-time · 2 yrs 5 mos" },
        { subject: "Teacher / Proffessor", location: "Noida, Uttar Pradesh, India · On-site", grade: "Full-time · 2 yrs 5 mos" },
    ];
    const router = useRouter();

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
            router.push("/Teaching_Detail_8");
        } else {
            alert("Please fill in all required fields.");
        }
    };
    const handlePrevious = () => {

        router.push("/subjects");

    };

    return (
        <div className="w-full bg-white relative min-h-screen">


            {/* Main Content Area */}
            <div className="w-full bg-white">
                <div className="relative max-w-[1281px] mx-auto shadow-lg -mt-8">


                    {/* Education Cards - Responsive Grid */}
                    <div className="p-8 bg-[#F2F6FB]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {educationData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 bg-white p-4 rounded-[2px] border border-[#B4C2D3]"
                                >
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-[#4E5865]">{item.subject}</h3>
                                        <p className="text-[#136AAD]" style={{ fontSize: '14px' }}>{item.location}</p>
                                        {item.grade && <p className="text-sm text-[#8397A6]">{item.grade}</p>}
                                    </div>
                                    <div className="flex gap-2">
                                        <button className=" rounded-full w-10 h-10">
                                            <Image
                                                src="/edit.png"
                                                alt="Edit Icon"
                                                width={35}
                                                height={35}
                                                className=" mx-auto"
                                            />
                                        </button>
                                        <button className=" w-10 h-10 rounded-full">
                                            <Image
                                                src="/delete.png"
                                                alt="Remove Icon"
                                                width={35}
                                                height={35}
                                                className=" mx-auto"
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Add Education Form */}
                    <div className="p-8 bg-[#F2F6FB]">
                        <h3 className=" mb-6 text-[black] font-semibold text-xl">Please add Teaching and Professional Experience.</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                            <div>
                                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                                    Organization <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]"
                                    placeholder="Enter here"
                                    value={organization}
                                    onChange={(e) => setOrganization(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                                    Designation <span className="text-red-500">*</span>
                                </label>
                                <select className=" text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB]" value={designation}
                                    onChange={(e) => setDesignation(e.target.value)}>
                                    <option >Option 1</option>
                                    <option >Option 1</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-bold text-sm mb-1 text-[#4E5865]">
                                    Start Date <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-4">
                                    <div className="relative w-full lg:w-[194px]">
                                        <select className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] pr-10  appearance-none" value={startMonth}
                                            onChange={(e) => setStartMonth(e.target.value)}>
                                            <option>Jan</option>
                                            <option>Feb</option>
                                            <option>March</option>
                                        </select>
                                        <Image
                                            src="/date.png"
                                            alt="Calendar icon"
                                            width={35}
                                            height={35}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                        />
                                    </div>
                                    <div className="relative w-full lg:w-[194px]">
                                        <select className=" text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] pr-10 appearance-none" value={startYear}
                                            onChange={(e) => setStartYear(e.target.value)}>
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                        </select>
                                        <Image
                                            src="/date.png"
                                            alt="Calendar icon"
                                            width={35}
                                            height={35}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-base font-semibold mb-1 text-[#4E5865]">
                                    End Date <span className="text-sm font-normal">(Leave blank if not complete)</span> <span className="text-red-500">*</span>
                                </label>
                                <div className="relative w-full lg:w-[400px]">
                                    <select className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] pr-10 appearance-none">
                                        <option value="" className="text-[#4e5865]">Enter here</option>
                                        <option value="Jan 2021">Jan 2021</option>
                                        <option value="Feb 2021">Feb 2021</option>
                                        <option value="Mar 2021">Mar 2021</option>
                                        <option value="Jan 2022">Jan 2022</option>
                                        <option value="Feb 2022">Feb 2022</option>
                                        <option value="Mar 2022">Mar 2022</option>
                                        <option value="Jan 2023">Jan 2023</option>
                                        <option value="Feb 2023">Feb 2023</option>
                                        <option value="Mar 2023">Mar 2023</option>
                                        <option value="Jan 2024">Jan 2024</option>
                                        <option value="Feb 2024">Feb 2024</option>
                                        <option value="Mar 2024">Mar 2024</option>
                                    </select>
                                    <Image
                                        src="/date.png"
                                        alt="Calendar icon"
                                        width={20}
                                        height={20}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block  font-bold text-sm mb-1 text-[#4E5865]">
                                    Association <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full text-black lg:w-[398px] border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6]" value={association}
                                    onChange={(e) => setAssociation(e.target.value)}>

                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                                    Job Description <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB] text-[#8397A6] "
                                    placeholder="Type here"
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                />
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex justify-left items-center mt-8">
                            <button className="w-[179px] h-[52px] border border-[#0F283C] text-[#0F283C] font-bold text-sm rounded-[2px]" onClick={handlePrevious}>
                                &lt;&lt; Previous
                            </button>
                            <button className="w-[179px] h-[52px] ml-4 bg-[#0B1F36] text-white font-bold text-sm rounded-[4px]" onClick={handleSave}>
                                Save &gt;&gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

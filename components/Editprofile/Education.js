"use client";
import Image from "next/image";
import { useState } from "react";

const Education = ({ handleNext, currentStep }) => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleSave = () => {
        const requiredFields = [
            "institutionName",
            "degreeType",
            "degreeName",
            "startDate",
            "endDate",
            "association"
        ];

        const newErrors = {};
        for (let field of requiredFields) {
            if (!formData[field]) {
                newErrors[field] = "This field is required";
            }
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log(formData);
            // Proceed to next step after successful validation
            handleNext();
        }
    };
    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="bg-[#F2F6FB] shadow-md rounded-lg p-6 w-full max-w-7xl mt-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Profile Image Section */}
                    <div className="md:w-1/3">
                        <div className="relative w-full h-60 bg-gray-200 border-dotted border-2 border-[#1BADFF] rounded-lg overflow-hidden">
                            <Image
                                src="/degree.png"
                                alt="Degree Placeholder"
                                width={275}
                                height={242}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Form Fields Section */}
                    <div className="md:w-2/3">
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "institutionName",
                                "degreeType",
                                "degreeName",
                                "startDate",
                                "endDate",
                                "association",
                                "speciality",
                                "score"
                            ].map((field, index) => (
                                <div key={index} className={`${field === "speciality" || field === "score" ? "sm:col-span-2" : ""}`}>
                                    <label className="block text-sm font-medium text-gray-700">
                                        {field.replace(/^\w/, (c) => c.toUpperCase())} *
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border border-gray-300 rounded w-full bg-white"
                                        placeholder={`Enter ${field}`}
                                    />
                                    {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                                </div>
                            ))}
                            <div className="sm:col-span-2 flex justify-start">
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="bg-[#0F283C] text-white py-3 px-10 rounded text-lg font-semibold"
                                >
                                    Next &gt;
                                </button>
                            </div>
                        </form>
                        <div className="flex justify-start mt-4">
                            <button
                                type="button"
                                onClick={handlePrevious}  // Corrected here
                                className="bg-transparent border border-[#0F283C] text-[#0F283C] py-2 px-7 rounded-md font-bold"
                            >
                                &gt;&gt; Previous
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;

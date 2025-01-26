"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import * as Yup from "yup";

const Experience = ({ handleNext, handlePrevious, formData, updateFormData }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const educationData = [
        { subject: "Teacher / Professor", location: "Noida, Uttar Pradesh, India · On-site", grade: "Full-time · 2 yrs 5 mos" },
        { subject: "Teacher / Professor", location: "Noida, Uttar Pradesh, India · On-site", grade: "Full-time · 2 yrs 5 mos" },
        { subject: "Teacher / Professor", location: "Noida, Uttar Pradesh, India · On-site", grade: "Full-time · 2 yrs 5 mos" },
    ];

    const validationSchema = Yup.object({
        organization: Yup.string().required("Required"),
        designation: Yup.string().required("Required"),
        startMonth: Yup.string().required("Required"),
        startYear: Yup.string().required("Required"),
        endDate: Yup.string().required("Required"),
        association: Yup.string().required("Required"),
        jobDescription: Yup.string().required("Required"),
    });

    const handleSave = (values) => {
        updateFormData('experience', values);
        handleNext();
        console.log(values);
    };

    return (
        <div className="min-h-screen w-full bg-white">
            <div className="relative max-w-[1281px] mx-auto shadow-lg ">
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
                    <Formik
                        initialValues={formData || {
                            organization: "",
                            designation: "",
                            startMonth: "",
                            startYear: "",
                            endDate: "",
                            association: "",
                            jobDescription: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSave}
                    >
                        {({ setFieldValue }) => (
                            <Form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                                {[
                                    {
                                        label: "Organization",
                                        name: "organization",
                                        type: "text",
                                    },
                                    {
                                        label: "Designation",
                                        name: "designation",
                                        type: "select",
                                        options: ["Option 1", "Option 2"],
                                    },
                                    {
                                        label: "Start Date",
                                        name: "startMonth",
                                        type: "text",
                                    },
                                    {
                                        label: "Start Year",
                                        name: "startYear",
                                        type: "text",
                                    },
                                    {
                                        label: "End Date",
                                        name: "endDate",
                                        type: "select",
                                        options: ["Jan 2021", "Feb 2021", "Mar 2021"],
                                    },
                                    {
                                        label: "Association",
                                        name: "association",
                                        type: "select",
                                        options: ["Option 1", "Option 2", "Option 3"],
                                    },
                                    {
                                        label: "Job Description",
                                        name: "jobDescription",
                                        type: "text",
                                    },
                                ].map(({ label, name, type, options }, idx) => (
                                    <div key={idx}>
                                        <label className="block font-bold mb-1 text-[#4E5865]" style={{ fontSize: '16px' }}>
                                            {label} <span className="text-red-500">*</span>
                                        </label>
                                        {type === "select" ? (
                                            <Field
                                                as="select"
                                                name={name}
                                                className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB]"
                                            >
                                                {options.map((opt, i) => (
                                                    <option key={i} value={opt}>
                                                        {opt}
                                                    </option>
                                                ))}
                                            </Field>
                                        ) : (
                                            <Field
                                                type={type}
                                                name={name}
                                                className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB]"
                                                placeholder="Enter here"
                                            />
                                        )}
                                        <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
                                    </div>
                                ))}
                                {/* Buttons */}
                                <div className="flex justify-start items-center mt-6 gap-4 col-span-full">
                                    <button
                                        type="button"
                                        className="w-40 h-12 border border-gray-700 text-gray-700 font-bold rounded-md"
                                        onClick={handlePrevious}
                                    >
                                    &lt;&lt; Previous
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-40 h-12 bg-[#0F283C] text-white font-bold rounded-md"
                                    >
                                        Save &gt;&gt;
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Experience;  
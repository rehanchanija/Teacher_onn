"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import * as Yup from "yup";
import { updateTutor } from "@/api/tutor.api";
import { useMutation } from "@tanstack/react-query";

const Experience = ({ handleNext, handlePrevious, formData, updateFormData, initialData }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const validationSchema = Yup.object({
        organization: Yup.string().required("Required"),
        designation: Yup.string().required("Required"),
        startDate: Yup.string().required("Required"),
        endDate: Yup.string().required("Required"),
        association: Yup.string().required("Required"),
        jobDescription: Yup.string().required("Required"),
    });

    const { mutate, isPending } = useMutation({
        mutationFn: updateTutor,
        onSuccess: (data) => {
            handleNext();
            localStorage.setItem("tutor", JSON.stringify(data))
            console.log("onSuccess", data)
        },
        onError: (error) => {
            console.log("onError", error)
        }
    })

    const handleSave = (values) => {
        mutate({
            "experience": {
                "organization": values.organization,
                "designation": values.designation,
                "startDate": values.startDate,
                "endDate": values.endDate,
                "association": values.association,
                "jobDescription": values.jobDescription
            }
        });
        updateFormData('experience', values);
    };
    console.log(initialData)
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
                        {initialData?.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 bg-white p-4 rounded-md border border-gray-300 shadow-sm"
                            >
                                <div className="flex-grow">
                                    <h3 className="font-bold text-gray-800">{item?.designation}</h3>
                                    <p className="text-sm text-gray-600">{item?.organization}</p>
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
                            startDate: "",
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
                                        label: "Start Date (DD/MM/YYYY)",
                                        name: "startDate",
                                        type: "text",
                                    },

                                    {
                                        label: "End Date (DD/MM/YYYY)",
                                        name: "endDate",
                                        type: "text",
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
                                <div className="col-span-full flex justify-between mt-6">
                                    <button
                                        type="button"
                                        onClick={handlePrevious}
                                        className="bg-transparent border border-[#0F283C] text-[#0F283C] py-2 md:py-3 px-6 md:px-10 rounded text-sm md:text-lg font-semibold"
                                    >
                                        &lt; Previous
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-[#0F283C] text-white py-2 md:py-3 px-6 md:px-10 rounded text-sm md:text-lg font-semibold"
                                        disabled={isPending}
                                    >
                                        Next &gt;
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
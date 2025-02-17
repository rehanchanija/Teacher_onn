"use client";
import { deleteTutorExperience, updateTutorExperience } from "@/api/tutor.api";
import { setTutor } from "@/store/slices/authSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from "react-redux";
import * as Yup from "yup";


const options = ["Option 1", "Option 2", "Option 3"]
const Experience = ({ handleNext, handlePrevious, formData, updateFormData, initialData }) => {
    const dispatch = useDispatch()
    const [initialValues, setInitialValues] = useState({
        _id: "",
        organization: "",
        designation: options[0],
        startDate: null,
        endDate: null,
        association: options[0],
        jobDescription: "",
    })
    const queryClient = useQueryClient()


    const validationSchema = Yup.object({
        organization: Yup.string().required("Required"),
        designation: Yup.string().required("Required"),
        startDate: Yup.date().required("Required"),
        endDate: Yup.date()
            .required("Required")
            .min(Yup.ref('startDate'), 'End date should be greater than start date'),
        association: Yup.string().required("Required"),
        jobDescription: Yup.string().required("Required"),
    });

    const { mutate, isPending } = useMutation({
        mutationFn: updateTutorExperience,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["GET_TUTOR"])

            handleNext();
            dispatch(setTutor(data))
        },
        onError: (error) => {
            console.log("onError", error)
        }
    })
    const { mutate: deleteExperience, } = useMutation({
        mutationFn: deleteTutorExperience,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["GET_TUTOR"])
            dispatch(setTutor(data))
        },
        onError: (error) => {
            console.log("onError", error)
        }
    })

    const onSubmit = (values) => {
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
    const handleCancel = (resetForm, setValues) => {
        resetForm();
    };
    return (
        <div className="min-h-screen w-full bg-white">
            <div className="relative max-w-[1281px] mx-auto shadow-lg ">


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
                                    <button
                                        disabled
                                        onClick={() => {
                                            setInitialValues({
                                                _id: item?._id,
                                                organization: item?.organization,
                                                designation: item?.designation,
                                                startDate: item?.startDate ? new Date(item?.startDate) : null,
                                                endDate: item?.endDate ? new Date(item?.endDate) : null,
                                                association: item?.association,
                                                jobDescription: item?.jobDescription,
                                            })
                                           
                                        }}

                                        className=" text-white rounded-full focus:outline-none" aria-label="Edit">
                                        <Image
                                            src="/edit.png"
                                            alt="Edit Icon"
                                            width={42}
                                            height={42}
                                            className="mx-auto"
                                        />
                                    </button>
                                    <button
                                        onClick={() => deleteExperience({ id: item?._id })}
                                        className=" text-white rounded-full focus:outline-none" aria-label="Remove">
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
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        enableReinitialize
                    >
                        {({ dirty, handleSubmit, resetForm, setValues, setFieldValue, values }) => (
                            console.log(dirty),


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
                                        type: "date",
                                    },

                                    {
                                        label: "End Date (DD/MM/YYYY)",
                                        name: "endDate",
                                        type: "date",
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
                                            type === "date" ? (
                                                <DatePicker
                                                    selected={values[name]}
                                                    onChange={(date) => setFieldValue(name, date)}
                                                    name={name}
                                                    className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB]"
                                                    placeholderText="Select Date"
                                                    dateFormat="MM/dd/yyyy"
                                                />
                                            ) : (
                                                <Field
                                                    type={type}
                                                    name={name}
                                                    className="text-black w-full border border-gray-300 rounded-[2px] p-2.5 bg-[#F2F6FB]"
                                                    placeholder="Enter here"
                                                />
                                            )
                                        )}
                                        <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
                                    </div>
                                ))}
                                {/* Buttons */}
                                <div className="col-span-full flex justify-between mt-6">
                                    <button
                                        type="button"
                                        onClick={() => dirty ? handleCancel(resetForm, setValues) : handlePrevious()}
                                        className="bg-transparent border border-[#0F283C] text-[#0F283C] py-2 md:px-7 px-4 rounded-md font-bold"
                                    >
                                        {dirty ? "<< Cancel" : "<< Previous"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (dirty) {
                                                handleSubmit();
                                            } else {
                                                handleNext();
                                            }
                                        }}
                                        className="bg-[#0F283C] text-white py-2 md:py-3 px-6 md:px-10 rounded text-sm md:text-lg font-semibold"
                                    >
                                        {dirty ? "Save >>" : "Next >>"}
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
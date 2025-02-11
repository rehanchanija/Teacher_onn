"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import * as Yup from "yup";
import { deleteTutorSubject, updateTutorSubject } from "@/api/tutor.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setTutor } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";

const Subject = ({ handleNext, handlePrevious, formData, updateFormData, initialData }) => {
    const dispatch = useDispatch()

    const [initialValues, setInitialValues] = useState({
        _id: "",
        subjects: "",
        fromLevel: "",
        toLevel: "",

    })
    const [originalValues, setOriginalValues] = useState(null);
    const queryClient = useQueryClient();

    const validationSchema = Yup.object({
        subjects: Yup.string().required("This field is required"),
        fromLevel: Yup.string().required("This field is required"),
        toLevel: Yup.string().required("This field is required"),
    });

    const { mutate, isPending } = useMutation({
        mutationFn: updateTutorSubject,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["GET_TUTOR"])
            handleNext();

            dispatch(setTutor(data))
        },
        onError: (error) => {
            console.log("onError", error)
        }
    });

    const { mutate: deleteSubject, } = useMutation({
        mutationFn: deleteTutorSubject,
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
            "subject": {
                "subject": values.subjects,
                "fromLevel": values.fromLevel,
                "toLevel": values.toLevel
            }
        });
        updateFormData('subjects', values);
    };

    const handleCancel = (resetForm, setValues) => {
        resetForm(); // Reset the form to its initial values
        setValues(initialValues); // Ensure the form fields are set to the initial values
    };

    console.log(initialData,)
    return (
        <div className="flex flex-col items-center">
            <div className="bg-[#F2F6FB] shadow-md rounded-lg p-6 w-full max-w-7xl">
                {/* Education Cards */}
                <div className="p-4 sm:p-6 md:p-8 bg-[#F2F6FB]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {initialData?.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 bg-white p-4 rounded border border-[#B4C2D3] shadow-sm"
                            >
                                <div className="flex-grow">
                                    <h3 className="font-bold text-[#4E5865]">{item?.subject}</h3>
                                    <p className="text-[#136AAD] text-sm">{item?.fromLevel} - {item?.toLevel}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setInitialValues({
                                                _id: item?._id,
                                                subjects: item?.subject,
                                                fromLevel: item?.fromLevel,
                                                toLevel: item?.toLevel,
                                            })
                                            setOriginalValues({
                                                _id: item?._id,
                                                subjects: item?.subject,
                                                fromLevel: item?.fromLevel,
                                                toLevel: item?.toLevel,
                                            });
                                        }}
                                        className="rounded-full w-8 h-8 sm:w-10 sm:h-10">
                                        <Image
                                            src="/edit.png"
                                            alt="Edit Icon"
                                            width={32}
                                            height={32}
                                            className="mx-auto"
                                        />
                                    </button>
                                    <button
                                        onClick={() => deleteSubject({ id: item?._id })}

                                        className="rounded-full w-8 h-8 sm:w-10 sm:h-10">
                                        <Image
                                            src="/delete.png"
                                            alt="Remove Icon"
                                            width={32}
                                            height={32}
                                            className="mx-auto"
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Add Subject Form */}
                <Formik
                    initialValues={initialValues}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ dirty, handleSubmit, setValues, resetForm }) => (
                        <Form className="p-6 bg-[#F2F6FB]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                                <div>
                                    <label className="block font-bold mb-1 text-gray-800">
                                        Subject <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        as="select"
                                        name="subjects"
                                        className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-600"
                                    >
                                        <option value="">Select here</option>
                                        {["subject 1", "subject 2", "subject 3"].map((opt, i) => (
                                            <option key={i} value={opt}>{opt}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="subjects" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <label className="block font-bold mb-1 text-gray-800">
                                        From Level <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        as="select"
                                        name="fromLevel"
                                        className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-600"
                                    >
                                        <option value="">Select here</option>
                                        {["Grade 1", "Grade 2", "Grade 3"].map((opt, i) => (
                                            <option key={i} value={opt}>{opt}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="fromLevel" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <label className="block font-bold mb-1 text-gray-800">
                                        To Level <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        as="select"
                                        name="toLevel"
                                        className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-600"
                                    >
                                        <option value="">Select here</option>
                                        {["Grade 1", "Grade 2", "Grade 3"].map((opt, i) => (
                                            <option key={i} value={opt}>{opt}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="toLevel" component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                            </div>

                            <div className="sm:col-span-2 flex justify-between gap-6 mt-5">
                                <button
                                    type="button"
                                    onClick={() => dirty ? handleCancel(resetForm, setValues) : handlePrevious()}
                                    className="bg-transparent border border-[#0F283C] text-[#0F283C] py-2 md:px-7 px-4  rounded-md font-bold"
                                >
                                    {dirty ? "Cancel" : "< Previous"}
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
                                    disabled={isPending}
                                    className="bg-[#0F283C] text-white py-2 md:py-3 px-6 md:px-10 rounded text-sm md:text-lg font-semibold"
                                >
                                    {dirty ? "Save >" : "Next >"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Subject;
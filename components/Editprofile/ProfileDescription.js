"use client";

import { updateTutor } from "@/api/tutor.api";
import { useMutation } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const ProfileDescription = ({ handleNext, handlePrevious, initialData }) => {

    const { mutate, isPending } = useMutation({
        mutationFn: updateTutor,
        onSuccess: (data) => {
            handleNext();
        },
        onError: (error) => {
            console.log("onError", error);
        }
    });

    const validationSchema = Yup.object().shape({
        profileDescription: Yup.string().required("Profile description is required"),
        isCheck: Yup.bool().oneOf([true], 'Please check this box')
    });

    const onSubmit = (values) => {
        if (values.profileDescription) {
            mutate({ profileDescription: values.profileDescription });
        } else {
            handleNext();
        }
    };

    return (
        <div className="w-full bg-white relative min-h-screen">
            <div className="relative max-w-[1281px] mx-auto shadow-lg">
                <div className="p-4 md:p-8 bg-[#F2F6FB]">
                    <h3 className="mb-6 text-[black] font-semibold text-xl">
                        Please enter your profile description.
                    </h3>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-[#4E5865] mb-2">
                            This is the most important section for you. *
                        </p>
                        <p className="text-lg font-semibold text-[#146FB6] mb-2">
                            80% of students will decide if they want to hire you just based on what you write here.
                        </p>
                        <p className="text-base text-[#4E5865] font-semibold italic mb-4">
                            Make sure it's good, relevant, in detail, and without mistakes.
                        </p>
                        <p className="text-base text-[#4E5865] font-semibold italic mb-4">
                            Do not copy-paste your resume here.
                        </p>
                        <div className="inline-block bg-[#136EB4] py-1 px-3 rounded mb-4">
                            <p className="text-base font-semibold italic text-white">
                                Do not share any contact details.
                            </p>
                        </div>
                    </div>

                    <Formik
                        initialValues={{
                            profileDescription: initialData?.description || "",
                            isCheck: initialData?.isCheck || false,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        enableReinitialize
                    >
                        {({ dirty, handleSubmit, resetForm, setValues, values, errors }) => {
                            console.log(errors  )
                            // Set original values when form is initialized
                            

                

                            return (
                                <Form>
                                    {/* Profile Description Editor */}
                                    <div className="border border-[#0F283C] rounded-lg p-4 md:p-8 bg-[#F2F6FB] mb-6 text-[#0F283C]">
                                        <Field
                                            as="textarea"
                                            name="profileDescription"
                                            className="w-full h-64 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Write your profile description here..."

                                        />
                                        <ErrorMessage name="profileDescription" component="div" className="text-red-500 text-sm" />

                                    
                                    </div>
                                    

                                    {/* Power Profile Section */}
                                    <div className="inline-block bg-[#18A61E] py-2 px-4 md:px-10 rounded mb-4">
                                        <p className="text-white text-base font-semibold italic">
                                            Power Profile: 95.5%
                                        </p>
                                    </div>

                                    {/* Checkbox */}
                                    <div className="mb-6">
                                        <label className="flex items-center">
                                            <Field type="checkbox" name="isCheck" className="mr-2" />
                                            <span className="text-base text-[#4E5865]">
                                                I have not shared any contact details (Email, Phone, Skype, Website, etc)
                                            </span>
                                        </label>
                                        <ErrorMessage name="isCheck" component="div" className="text-red-500 text-sm" />
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="flex justify-between mt-6">
                                        <button
                                            type="button"
                                            onClick={dirty ? resetForm : handlePrevious}
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
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ProfileDescription;

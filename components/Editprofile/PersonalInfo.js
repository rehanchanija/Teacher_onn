'use client';

import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import * as Yup from "yup";

const PersonalInfo = ({ handleNext,  formData, updateFormData  }) => {
    // Validation schema using Yup
    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        mobile: Yup.string()
            .required("Mobile is required")
            .matches(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
        specialty: Yup.string().required("Specialty is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        city: Yup.string().required("City is required"),
        address: Yup.string().required("Address is required"),
    });

    const initialValues = formData || {
        firstName: "",
        lastName: "",
        mobile: "",
        specialty: "",
        email: "",
        city: "",
        address: "",
    };


    const handleSubmit = (values) => {
        updateFormData(values);
        handleNext();
        console.log(values);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
            {/* Form Section */}
            <div className="bg-[#F2F6FB] shadow-md rounded-lg p-6 w-full max-w-7xl mt-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Profile Image Section */}
                    <div className="md:w-1/3">
                        <div className="relative w-full h-60 bg-gray-200 border-dotted border-2 border-[#1BADFF] rounded-lg overflow-hidden">
                            <Image
                                src="/profilepic.png"
                                alt="Profile Placeholder"
                                width={275}
                                height={242}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Recommendation for JPG, PNG</p>
                        <p className="text-sm text-gray-600">Max Size 5MB</p>
                        <input type="file" id="profileImage" className="hidden" />
                        <label
                            htmlFor="profileImage"
                            className="inline-block bg-[#1BADFF] text-white py-2 px-4 rounded mt-3 cursor-pointer"
                        >
                            Choose Image
                        </label>
                    </div>

                    {/* Form Fields Section */}
                    <div className="md:w-2/3">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {() => (
                                <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["firstName", "lastName", "mobile", "specialty", "email", "city", "address"].map((field, index) => (
                                        <div key={index} className={`${field === "address" ? "sm:col-span-2" : ""}`}>
                                            <label className="block text-sm font-medium text-gray-700">
                                                {field.replace(/^\w/, (c) => c.toUpperCase())} *
                                            </label>
                                            <Field
                                                name={field}
                                                type="text"
                                                placeholder={`Enter ${field}`}
                                                className="mt-1 p-2 border border-gray-300 rounded w-full bg-white"
                                            />
                                            <ErrorMessage
                                                name={field}
                                                component="div"
                                                className="text-sm text-red-500 mt-1"
                                            />
                                        </div>
                                    ))}
                                    <div className="sm:col-span-2 flex justify-start">
                                        <button
                                            type="submit"
                                            className="bg-[#0F283C] text-white py-3 px-10 rounded text-lg font-semibold"
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
        </div>
    );
};

export default PersonalInfo;

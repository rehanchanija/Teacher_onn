'use client';

import { updateTutor } from "@/api/tutor.api";
import { setTutor } from "@/store/slices/authSlice";
import { useMutation } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";


const PersonalInfo = ({ handleNext, formData, updateFormData, initialData }) => {
    const dispatch = useDispatch()
    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        mobileNumber: Yup.string()
            .required("Mobile is required")
            .matches(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
        specialty: Yup.string().required("Specialty is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        city: Yup.string().required("City is required"),
        address: Yup.string().required("Address is required"),
    });

    const [previewImage, setPreviewImage] = useState(formData?.image || "/profilepic.png");

    const handleImageChange = (event, setFieldValue) => {
        const file = event.currentTarget.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
                setFieldValue("image", file);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = (values) => {
        mutate({
            "personalInfo": {
                "fullName": `${values.firstName} ${values.lastName}`,
                "mobileNumber": values.mobileNumber,
                "speciality": values.specialty,
                "email": values.email,
                "city": values.city,
                "address": values.address,
                "image": ""
            },
        });

        updateFormData(values);
        console.log({
            "personalInfo": {
                "fullName": `${values.firstName} ${values.lastName}`,
                "mobileNumber": values.mobileNumber,
                "speciality": values.specialty,
                "email": values.email,
                "city": values.city,
                "address": values.address,
                "image": ""
            },
        });
    };

    const { mutate, isPending } = useMutation({
        mutationFn: updateTutor,
        onSuccess: (data) => {
            handleNext();
            dispatch(setTutor(data))
        },
        onError: (error) => {
            console.log("onError", error)
        }
    })

    return (
        <div className="bg-gray-100 flex flex-col items-center px-4 sm:px-6 lg:px-8">
            {/* Form Section - Added horizontal padding for mobile */}
            <div className="bg-[#F2F6FB] shadow-md rounded-lg p-4 md:p-6 w-full max-w-7xl mt-4 md:mt-8">
                <Formik
                    initialValues={{
                        firstName: initialData?.fullName?.split(" ")[0] || "",
                        lastName: initialData?.fullName?.split(" ")[1] || "",
                        mobileNumber: initialData?.mobileNumber || "",
                        specialty: initialData?.speciality || "",
                        email: initialData?.email || "",
                        city: initialData?.city || "",
                        address: initialData?.address || "",
                        image: initialData?.image || previewImage,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
                >
                    {({ dirty, handleSubmit }) => (
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                            {/* Profile Image Section */}
                            <div className="md:w-1/3 flex flex-col items-center md:items-start">
                                <div className="relative w-full max-w-xs md:w-full h-40 md:h-60 bg-gray-200 border-dotted border-2 border-[#1BADFF] rounded-lg overflow-hidden">
                                    <Image
                                        src={previewImage}
                                        alt="Profile Placeholder"
                                        width={275}
                                        height={242}
                                        className="object-cover w-full h-full"
                                        priority
                                    />
                                </div>
                                <p className="text-xs md:text-sm text-gray-600 mt-2 text-center md:text-left">
                                    Recommendation for JPG, PNG
                                </p>
                                <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
                                    Max Size 5MB
                                </p>

                                <>
                                    <input
                                        type="file"
                                        id="profileImage"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(event) => handleImageChange(event, setFieldValue)}
                                    />
                                    <label
                                        htmlFor="profileImage"
                                        className="inline-block bg-[#1BADFF] text-white py-2.5 px-5 md:py-2 md:px-4 rounded mt-3 cursor-pointer text-sm md:text-base w-full md:w-auto text-center"
                                    >
                                        Choose Image
                                    </label>
                                </>
                            </div>

                            {/* Form Fields Section - Mobile optimizations */}
                            <div className="md:w-2/3">
                                <Form
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    {["firstName", "lastName", "mobileNumber", "specialty", "email", "city", "address"].map((field, index) => (
                                        <div key={index} className={`${field === "address" ? "sm:col-span-2" : ""}`}>
                                            <label className="block text-sm font-medium text-gray-700 md:text-base">
                                                {field.replace(/^\w/, (c) => c.toUpperCase())} *
                                            </label>
                                            <Field
                                                name={field}
                                                type="text"
                                                placeholder={`Enter ${field}`}
                                                className="mt-1 p-3 md:p-3 border border-gray-300 rounded w-full bg-white text-sm md:text-base focus:ring-2 focus:ring-[#1BADFF] focus:border-transparent"
                                            />
                                            <ErrorMessage
                                                name={field}
                                                component="div"
                                                className="text-xs md:text-sm text-red-500 mt-1"
                                            />
                                        </div>
                                    ))}
                                    <div className="sm:col-span-2 flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                if (dirty) {
                                                    handleSubmit();
                                                } else {
                                                    handleNext()
                                                }
                                            }}
                                            className="bg-[#0F283C] text-white py-2.5 px-8 md:py-3 md:px-10 rounded text-base md:text-lg font-semibold w-full sm:w-auto" disabled={isPending}
                                        >
                                            {dirty ? 'Save >>' : 'Next >>'} 
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default PersonalInfo;

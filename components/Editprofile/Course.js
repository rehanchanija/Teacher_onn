"use client";
import { deleteTutorCourse, updateTutorCourse } from "@/api/tutor.api";
import { setTutor } from "@/store/slices/authSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toast CSS
import * as Yup from "yup";

const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'Hindi' },
    { value: 'ta', label: 'Tamil' },
    { value: 'te', label: 'Telugu' },
    { value: 'ml', label: 'Malayalam' },
    { value: 'kn', label: 'Kannada' },
    { value: 'mr', label: 'Marathi' },
    { value: 'gu', label: 'Gujarati' },
    { value: 'bn', label: 'Bengali' },
    { value: 'pa', label: 'Punjabi' },
    { value: 'ur', label: 'Urdu' },
    { value: 'or', label: 'Oriya' },
    { value: 'as', label: 'Assamese' },
    { value: 'ma', label: 'Maithili' },
    { value: 'sa', label: 'Sanskrit' },
  ];

const Course = ({ handlePrevious, handleNext, updateFormData, handleSubmit, initialData }) => {
    const [initialValues, setInitialValues] = useState({
        _id: "",
        Course_title: "",
        Description: "",
        Price: "",
        Duration: "",
        Image: "",
        certificateProvided: "",
        MOD: "",
        Group: "",
        Cert: "",
        CD: "",
        Lan: [],
    })
    const queryClient = useQueryClient()
    const dispatch = useDispatch()

    const { mutate, isPending } = useMutation({
        mutationFn: updateTutorCourse,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["GET_TUTOR"])
            handleSubmit()
            dispatch(setTutor(data))
            toast.success("Course updated successfully! 🎉", { position: "top-center" });  // Success Toast

        },
        onError: (error) => {
            toast.error("Course update failed! 🎉");  // Error Toast
        }
    })
    const { mutate: deleteCourse, } = useMutation({
        mutationFn: deleteTutorCourse,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["GET_TUTOR"])
            dispatch(setTutor(data))
            toast.success("Course deleted successfully! 🎉", { position: "top-center" });  // Success Toast
        },
        onError: (error) => {
            toast.error("Course delete failed! 🎉");  // Error
        }
    })
    

    const validationSchema = Yup.object({
        Course_title: Yup.string().required("Required"),
        Description: Yup.string().required("Required"),
        Price: Yup.number().required("Required"),
        Currency: Yup.string().required("Required"),
        MOD: Yup.string().required("Required"),
        Group: Yup.string().required("Required"),
        Cert: Yup.string().required("Required"),
        CD: Yup.string().required("Required"),
        LOI: Yup.array().min(1, "At least one language is required"),
    });
    console.log(initialValues)


    const handleCancel = (resetForm, setValues) => {
        resetForm(); // Reset the form to its initial values
        setValues(initialValues); // Ensure the form fields are set to the initial values
    };

    return (
        <div className="w-full bg-white relative min-h-screen">
            <div className="w-full bg-white">
                <div className="relative max-w-[1280px] mx-auto shadow-lg">
                    <div className="p-4 sm:p-6 md:p-8 bg-[#F2F6FB]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {initialData?.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 bg-white p-4 rounded border border-[#B4C2D3] shadow-sm"
                                >
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-[#4E5865]">{item?.courseTitle}</h3>
                                        <p className="text-[#136AAD] text-sm">{item?.courseDescription}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => {
                                                setInitialValues({
                                                    _id: item?._id,
                                                    Course_title: item?.courseTitle,
                                                    Description: item?.courseDescription,
                                                    Price: item?.coursePrice,
                                                    Duration: item?.courseDuration,
                                                    certificateProvided: item?.certificateProvided,
                                                    Image: item?.image,
                                                    MOD: item?.MOD,
                                                    Group: item?.Group,
                                                    Cert: item?.Cert,
                                                    CD: item?.CD,
                                                    LOI: item?.LOI,
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
                                            onClick={() => deleteCourse({ id: item?._id })}
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

                    <div className="p-4 sm:p-6 md:p-8 bg-[#F2F6FB]">
                        <h3 className="mb-4 sm:mb-6 text-black font-bold">Please add Course I teach.</h3>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            enableReinitialize
                            onSubmit={(values) => {
                                console.log(values);
                                mutate({
                                    "course": {
                                        "courseTitle": values.Course_title,
                                        "courseDescription": values.Description,
                                        "coursePrice": values.Price,
                                        "currency": values.Currency,
                                        "modeOfDelivery": values.MOD,
                                        "groupSize": values.Group,
                                        "certificateProvided": values.Cert,
                                        "courseDuration": values.CD,
                                        "language": values.LOI.map(lang => lang.value).join(',')
                                    }
                                });
                                updateFormData('course', values);
                            }}
                        >
                            {({ dirty, resetForm, setValues }) => (
                                <Form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block font-bold mb-2 text-[#4E5865]">
                                            Course title <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            type="text"
                                            name="Course_title"
                                            className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                            placeholder="Enter here"
                                        />
                                        <ErrorMessage name="Course_title" component="div" className="text-red-500" />
                                    </div>

                                    <div>
                                        <label className="block font-bold mb-2 text-[#4E5865]">
                                            Description <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            type="text"
                                            name="Description"
                                            className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                            placeholder="Enter here"
                                        />
                                        <ErrorMessage name="Description" component="div" className="text-red-500" />
                                    </div>

                                    <div>
                                        <label className="block font-bold mb-2 text-[#4E5865]">
                                            Price <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex border border-gray-300 rounded overflow-hidden">
                                            <Field
                                                type="text"
                                                name="Price"
                                                className="flex-grow px-2 py-1.5 bg-[#F2F6FB] outline-none sm:px-3 sm:py-2"
                                                placeholder="Enter here"
                                            />
                                            <Field
                                                as="select"
                                                name="Currency"
                                                className="bg-[#9EB5C7] text-white text-sm px-2 outline-none cursor-pointer"
                                            >
                                                <option value="INR">INR</option>
                                                <option value="USD">USD</option>
                                                <option value="JPY">JPY</option>
                                            </Field>
                                        </div>
                                        <ErrorMessage name="Price" component="div" className="text-red-500" />
                                    </div>

                                    <div>
                                        <label className="block font-bold mb-2 text-[#4E5865]">
                                            Mode Of Delivery <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            as="select"
                                            name="MOD"
                                            className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                        >
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </Field>
                                        <ErrorMessage name="MOD" component="div" className="text-red-500" />
                                    </div>

                                    <div>
                                        <label className="block font-bold mb-2 text-[#4E5865]">
                                            Group Size <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            as="select"
                                            name="Group"
                                            className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                        >
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </Field>
                                        <ErrorMessage name="Group" component="div" className="text-red-500" />
                                    </div>

                                    <div>
                                        <label className="block font-bold mb-2 text-[#4E5865]">
                                            Certificate Provided <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            as="select"
                                            name="Cert"
                                            className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                        >
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </Field>
                                        <ErrorMessage name="Cert" component="div" className="text-red-500" />
                                    </div>

                                    <div>
                                        <label className="block font-bold mb-2 text-[#4E5865]">
                                            Languages of Instruction <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            name="LOI"
                                            component={({ form, field }) => (
                                                <Select
                                                    {...field}
                                                    options={languageOptions}
                                                    isMulti
                                                    className="w-full"
                                                    classNamePrefix="select"
                                                    placeholder="Select languages"
                                                    onChange={(selectedOptions) => {
                                                        form.setFieldValue(field.name, selectedOptions);
                                                    }}
                                                    onBlur={() => form.setFieldTouched(field.name, true)}
                                                    value={field.value}
                                                />
                                            )}
                                        />
                                        <ErrorMessage name="LOI" component="div" className="text-red-500" />
                                    </div>

                                    <div>
                                        <label className="block font-bold mb-2 text-[#4E5865]">
                                            Course Duration <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            as="select"
                                            name="CD"
                                            className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                        >
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </Field>
                                        <ErrorMessage name="CD" component="div" className="text-red-500" />
                                    </div>

                                    <div className="col-span-full flex justify-between mt-6 gap-4">
                                        <button
                                            type="button"
                                            onClick={dirty ? resetForm : handlePrevious}
                                            className="bg-transparent border border-[#0F283C] text-[#0F283C] py-2 md:px-7 px-4 rounded-md font-bold"
                                        >
                                            {dirty ? "<< Cancel" : "<< Previous"}
                                        </button>
                                        {dirty && (
                                            <button
                                                type="submit"
                                                className="bg-[#0F283C] text-white py-2 md:py-3 px-6 md:px-10 rounded text-sm md:text-lg font-semibold"
                                            >
                                                Save
                                            </button>
                                        )}
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

export default Course;
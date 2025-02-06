"use client";
import { useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import { updateTutor } from "@/api/tutor.api";
import { useMutation } from "@tanstack/react-query";

const Course = ({ handlePrevious, formData, updateFormData, handleSubmit, initialData }) => {


    const { mutate, isPending } = useMutation({
        mutationFn: updateTutor,
        onSuccess: (data) => {
            handleSubmit();
            localStorage.setItem("tutor", JSON.stringify(data))
            console.log("onSuccess", data)
        },
        onError: (error) => {
            console.log("onError", error)
        }
    })
    console.log(initialData)

    const formik = useFormik({
        initialValues: {

            Course_title: "",
            Description: "",
            Price: "",
            Currency: "INR",
            MOD: "Option 1",
            Group: "Option 1",
            Cert: "Option 1",
            CD: "Option 1",
            LOI: "",
        },
        validationSchema: Yup.object({
            Course_title: Yup.string().required("Required"),
            Description: Yup.string().required("Required"),
            Price: Yup.string().required("Required"),
            Currency: Yup.string().required("Required"),
            MOD: Yup.string().required("Required"),
            Group: Yup.string().required("Required"),
            Cert: Yup.string().required("Required"),
            CD: Yup.string().required("Required"),
            LOI: Yup.string().required("Required"),
        }),
        onSubmit: (values) => {
            console.log(values)
            mutate({
                "courses": {
                    "courseTitle": values.Course_title,
                    "courseDescription": values.Description,
                    "coursePrice": values.Price,
                    "currency": values.Currency,
                    "modeOfDelivery": values.MOD,
                    "groupSize": values.Group,
                    "certificateProvided": values.Cert,
                    "courseDuration": values.CD,
                    "language": values.LOI
                }
            });
            updateFormData('course', values);
        },
    });


    return (
        <div className="w-full bg-white relative min-h-screen">
            {/* Main Content Area */}
            <div className="w-full bg-white">
                <div className="relative max-w-[1280px] mx-auto shadow-lg">
                    {/* Education Cards - Responsive Grid */}
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
                                        <button className="rounded-full w-8 h-8 sm:w-10 sm:h-10">
                                            <Image
                                                src="/edit.png"
                                                alt="Edit Icon"
                                                width={32}
                                                height={32}
                                                className="mx-auto"
                                            />
                                        </button>
                                        <button className="rounded-full w-8 h-8 sm:w-10 sm:h-10">
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

                    {/* Add Education Form */}
                    <div className="p-4 sm:p-6 md:p-8 bg-[#F2F6FB]">
                        <h3 className="mb-4 sm:mb-6 text-black font-bold">Please add Course I teach.</h3>
                        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Course title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                    placeholder="Enter here"
                                    {...formik.getFieldProps('Course_title')}
                                />
                                {formik.touched.Course_title && formik.errors.Course_title ? (
                                    <div className="text-red-500">{formik.errors.Course_title}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Description <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                    placeholder="Enter here"
                                    {...formik.getFieldProps('Description')}
                                />
                                {formik.touched.Description && formik.errors.Description ? (
                                    <div className="text-red-500">{formik.errors.Description}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Price <span className="text-red-500">*</span>
                                </label>
                                <div className="flex border border-gray-300 rounded overflow-hidden">
                                    <input
                                        type="text"
                                        className="flex-grow px-2 py-1.5 bg-[#F2F6FB] outline-none sm:px-3 sm:py-2"
                                        placeholder="Enter here"
                                        {...formik.getFieldProps('Price')}
                                    />
                                    <select
                                        className="bg-[#9EB5C7] text-white text-sm px-2 outline-none cursor-pointer"
                                        {...formik.getFieldProps('Currency')}
                                    >
                                        <option value="INR">INR</option>
                                        <option value="USD">USD</option>
                                        <option value="JPY">JPY</option>
                                    </select>
                                </div>
                                {formik.touched.Price && formik.errors.Price ? (
                                    <div className="text-red-500">{formik.errors.Price}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Mode Of Delivery <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                    {...formik.getFieldProps('MOD')}
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                {formik.touched.MOD && formik.errors.MOD ? (
                                    <div className="text-red-500">{formik.errors.MOD}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Group Size <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                    {...formik.getFieldProps('Group')}
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                {formik.touched.Group && formik.errors.Group ? (
                                    <div className="text-red-500">{formik.errors.Group}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Certificate Provided <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                    {...formik.getFieldProps('Cert')}
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                {formik.touched.Cert && formik.errors.Cert ? (
                                    <div className="text-red-500">{formik.errors.Cert}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Language Of Instructions <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                    placeholder="Enter here"
                                    {...formik.getFieldProps('LOI')}
                                />
                                {formik.touched.LOI && formik.errors.LOI ? (
                                    <div className="text-red-500">{formik.errors.LOI}</div>
                                ) : null}
                            </div>
                            <div>
                                <label className="block font-bold mb-2 text-[#4E5865]">
                                    Course Duration <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded p-2 bg-[#F2F6FB] sm:p-2.5"
                                    {...formik.getFieldProps('CD')}
                                >
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                                {formik.touched.CD && formik.errors.CD ? (
                                    <div className="text-red-500">{formik.errors.CD}</div>
                                ) : null}
                            </div>
                            {/* Buttons */}
                            <div className="col-span-full flex justify-start items-center mt-6 gap-4">
                                <button
                                    type="button"
                                    onClick={handlePrevious}
                                    className="w-40 h-12 border border-gray-700 text-gray-700 font-bold rounded-md"
                                >
                                    &lt;&lt; Previous
                                </button>
                                <button
                                    type="submit"
                                    className="w-40 h-12 bg-[#0F283C] text-white font-bold rounded-md"
                                    disabled={isPending}
                                >
                                    Save &gt;&gt;
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Course;
"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import * as Yup from "yup";

const Education = ({ handleNext, handlePrevious, formData, updateFormData }) => {
    const initialValues = formData || {
        institutionName: "",
        degreeType: "",
        degreeName: "",
        startDate: "",
        endDate: "",
        association: "",
        speciality: "",
        score: "",
    };

    const validationSchema = Yup.object({
        institutionName: Yup.string().required("This field is required"),
        degreeType: Yup.string().required("This field is required"),
        degreeName: Yup.string().required("This field is required"),
        startDate: Yup.string().required("This field is required"),
        endDate: Yup.string().required("This field is required"),
        association: Yup.string().required("This field is required"),
        speciality: Yup.string(),
        score: Yup.string(),
    });

    const handleSubmit = (values) => {
        updateFormData('education', values);
        handleNext();
        console.log(values);
    };

    return (
        <div className="  flex flex-col items-center">
            <div className="bg-[#F2F6FB] shadow-md rounded-lg p-6 w-full max-w-7xl ">
                <div className="flex flex-col md:flex-row gap-8 my-4">
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
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {() => (
                                <Form className="grid md:grid-cols-2 gap-4">
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
                                            <Field
                                                type="text"
                                                name={field}
                                                className="mt-1 p-2 border border-gray-300 rounded w-full bg-white"
                                                placeholder={`Enter ${field}`}
                                            />
                                            <ErrorMessage name={field} component="p" className="text-red-500 text-sm" />
                                        </div>
                                    ))}
                                    <div className="sm:col-span-2 flex justify-start gap-6">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            className="bg-transparent border border-[#0F283C] text-[#0F283C] py-2 px-7 rounded-md font-bold"
                                        >
                                            &lt; Previous
                                        </button>
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

export default Education;
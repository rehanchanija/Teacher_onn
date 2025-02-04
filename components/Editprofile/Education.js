"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import { updateTutor } from "@/api/tutor.api";
import { useMutation } from "@tanstack/react-query";

const Education = ({ handleNext, handlePrevious, formData, updateFormData }) => {
    const initialValues = formData || {
        institutionName: "0",
        degreeType: "0",
        degreeName: "0",
        startDate: "0",
        endDate: "0",
        association: "0",
        speciality: "0",
        score: "0",
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

    const handleSubmit = (values) => {
        mutate({
            "educationInfo": [{
                "instituteWithCity": values.institutionName,
                "degreeType": values.degreeType,
                "degreeName": values.degreeName,
                "startDate": values.startDate,
                "endDate": values.endDate,
                "association": values.association,
                "speciality": values.speciality,
                "score": values.score
            }]
        });
        // updateFormData('education', values);
        console.log(values);
    };

    return (
        <div className="  flex flex-col items-center">
            <div className="bg-[#F2F6FB] shadow-md rounded-lg p-6 w-full max-w-7xl ">
                <div className="flex flex-col md:flex-row gap-8 my-4">
                    {/* Profile Image Section */}
                    <div className="md:w-1/3">
                        <div className="relative w-full md:h-60 bg-gray-200 border-dotted border-2 border-[#1BADFF] rounded-lg overflow-hidden">
                            <Image
                                src="/degree.png"
                                alt="Degree Placeholder"
                                width={275}
                                height={242}
                                className="md:object-cover  md:w-full h-full"
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
                                <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                                className="mt-1 p-2 md:p-3 border border-gray-300 rounded w-full bg-white text-sm md:text-base"
                                                placeholder={`Enter ${field}`}
                                            />
                                            <ErrorMessage name={field} component="p" className="text-red-500 text-sm mt-1" />
                                        </div>
                                    ))}
                                    <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div>
    );
};

export default Education;
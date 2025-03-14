"use client";
import {
  deleteTutorEducationInfo,
  updateTutorEducationInfo,
} from "@/api/tutor.api";
import { setTutor } from "@/store/slices/authSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ErrorMessage, Field, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";

const Education = ({ handleNext, handlePrevious, formData, initialData }) => {
  const [initialValues, setInitialValues] = useState({
    _id: "",
    instituteWithCity: "",
    degreeType: "",
    degreeName: "",
    startDate: null,
    endDate: null,
    association: "",
    speciality: "",
    score: "",
  });
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    instituteWithCity: Yup.string().required("This field is required"),
    degreeType: Yup.string().required("This field is required"),
    degreeName: Yup.string().required("This field is required"),
    startDate: Yup.date().required("This field is required"),
    endDate: Yup.date()
      .required("This field is required")
      .min(Yup.ref("startDate"), "End date should be greater than start date"),
    association: Yup.string().required("This field is required"),
    speciality: Yup.string(),
    score: Yup.string(),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: updateTutorEducationInfo,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["GET_TUTOR"]);
      handleNext();
      dispatch(setTutor(data));
      toast.success("Education Info Updated Successfully", {
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error("Error Updating Education Info");
    },
  });

  const { mutate: deleteEducationInfo } = useMutation({
    mutationFn: deleteTutorEducationInfo,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["GET_TUTOR"]);
      dispatch(setTutor(data));
      toast.success("Education Info Deleted Successfully", {
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error("Error Deleting Education Info");
    },
  });

  const onSubmit = (values) => {
    mutate({
      educationInfo: {
        instituteWithCity: values.instituteWithCity,
        degreeType: values.degreeType,
        degreeName: values.degreeName,
        startDate: values.startDate,
        endDate: values.endDate,
        association: values.association,
        speciality: values.speciality,
        score: values.score,
      },
    });
  };

  const handleCancel = (resetForm, setValues) => {
    resetForm(); // Reset the form to its initial values
    setValues(initialValues); // Ensure the form fields are set to the initial values
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#F2F6FB] shadow-md rounded-lg p-6 w-full max-w-7xl">
        <div className="p-4 sm:p-6 md:p-8 bg-[#F2F6FB]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            
            {initialData?.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-4 rounded border border-[#B4C2D3] shadow-sm"
              >
                <div className="flex-grow">
                  <h3 className="font-bold text-[#4E5865]">
                    {item?.degreeType}
                  </h3>
                  <p className="text-[#136AAD] text-sm">{item?.association}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setInitialValues({
                        _id: item?._id,
                        instituteWithCity: item?.instituteWithCity,
                        degreeType: item?.degreeType,
                        degreeName: item?.degreeName,
                        startDate: item?.startDate,
                        endDate: item?.endDate,
                        association: item?.association,
                        speciality: item?.speciality,
                        score: item?.score,
                      });
                    }}
                    className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <Image
                      src="/edit.png"
                      alt="Edit Icon"
                      width={32}
                      height={32}
                      className="mx-auto"
                    />
                  </button>
                  <button
                    onClick={() => deleteEducationInfo({ id: item?._id })}
                    className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  >
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
        <div>
 <h1 className="text-base md:text-xl font-semibold ml-5 md:ml-8">Add Education/Certification</h1>

        </div>
        
        <div className="flex flex-col md:flex-row gap-8 my-4 mx-5 md:mx-8">
          
          
          {/* Form Fields Section */}
          <div className="md:w-2/3">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              enableReinitialize
            >
              {({
                dirty,
                handleSubmit,
                setFieldValue,
                values,
                errors,
                resetForm,
                setValues,
              }) => (
                console.log(errors),
                (
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "instituteWithCity",
                      "degreeType",
                      "degreeName",
                      "association",
                      "speciality",
                      "score",
                    ].map((field, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium text-gray-700">
                          {field.replace(/^\w/, (c) => c.toUpperCase())} *
                        </label>
                        <Field
                          type="text"
                          name={field}
                          className="mt-1 p-2 md:p-3 border border-gray-300 rounded w-full bg-white text-sm md:text-base"
                          placeholder={`Enter ${field}`}
                        />
                        <ErrorMessage
                          name={field}
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    ))}
                    <div className="md:col-span-2 flex flex-col md:flex-row gap-4">
                      <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                          Start Date *
                        </label>
                        <DatePicker
                          selected={values?.startDate}
                          onChange={(date) => setFieldValue("startDate", date)}
                          className="mt-1 p-2 border border-gray-300 rounded w-full bg-white"
                          placeholderText="Select start date"
                        />
                        <ErrorMessage
                          name="startDate"
                          component="p"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">
                          End Date *
                        </label>
                        <DatePicker
                          selected={values?.endDate}
                          onChange={(date) => setFieldValue("endDate", date)}
                          className="mt-1 p-2 border border-gray-300 rounded w-full bg-white"
                          placeholderText="Select end date"
                          minDate={values?.startDate}
                        />
                        <ErrorMessage
                          name="endDate"
                          component="p"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    {/* Button section */}
                    <div className="sm:col-span-2 flex justify-between gap-6">
                      <button
                        type="button"
                        onClick={() =>
                          dirty
                            ? handleCancel(resetForm, setValues)
                            : handlePrevious()
                        }
                        className="bg-transparent border border-[#0F283C] text-[#0F283C] py-2 md:px-7 px-4 rounded-md font-bold"
                      >
                        {dirty ? "<< Cancel" : "<< Previous"}
                      </button>
                      <button
                        type="submit"
                        onClick={() => {
                          if (dirty) {
                            handleSubmit();
                          } else {
                            handleNext();
                          }
                        }}
                        className="bg-[#0F283C] text-white py-2 md:py-3 px-6 md:px-10 rounded text-sm md:text-lg font-semibold"
                        disabled={isPending}
                      >
                        {dirty ? "Save >>" : "Next >>"}
                      </button>
                    </div>
                  </div>
                )
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

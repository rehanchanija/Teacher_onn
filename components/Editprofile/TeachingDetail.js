'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { updateTutor } from "@/api/tutor.api";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from 'react-redux';
import { setTutor } from '@/store/slices/authSlice';

const TeachingDetail = ({ handleNext, handlePrevious, updateFormData, initialData }) => {
    const dispatch = useDispatch()
    const Radiobuttons = [
        { name: 'travel', label: 'Are you willing to travel to Student?' },
        { name: 'onlineTeaching', label: 'Available for online teaching?' },
        { name: 'digitalPen', label: 'Do you have a digital pen?' },
        { name: 'homeworkHelp', label: 'Do you help with homework and assignments?' },
        { name: 'fullTimeTeacher', label: 'Are you a full-time teacher employed by a school/college?' }
    ]
    console.log(initialData)

    const initialValues = {
        charge: initialData?.teachingDetails?.charge || '',
        minFee: initialData?.teachingDetails?.minimumFee || '',
        maxFee: initialData?.teachingDetails?.maximumFee || '',
        feeDetails: initialData?.teachingDetails?.feeDetails || '',
        totalExperience: initialData?.teachingDetails?.totalExperience || '',
        teachingExperience: initialData?.teachingDetails?.teachingExperience || '',
        onlineTeachingExperience: initialData?.teachingDetails?.onlineTeachingExperience || '',
        travel: initialData?.teachingDetails?.travel || 'no',
        onlineTeaching: initialData?.teachingDetails?.onlineTeaching || 'no',
        digitalPen: initialData?.teachingDetails?.digitalPen || 'no',
        homeworkHelp: initialData?.teachingDetails?.homeworkHelp || 'no',
        fullTimeTeacher: initialData?.teachingDetails?.fullTimeTeacher || 'no',
        opportunities: initialData?.teachingDetails?.opportunities || ''
    };

    const isCheck = {
        travel: false,
        onlineTeaching: false,
        digitalPen: false,
        homeworkHelp: false,
        fullTimeTeacher: false
    };

    const validationSchema = Yup.object({
        charge: Yup.string().required('Required'),
        minFee: Yup.string().required('Required'),
        maxFee: Yup.string().required('Required'),
        feeDetails: Yup.string().required('Required'),
        totalExperience: Yup.string().required('Required'),
        teachingExperience: Yup.string().required('Required'),
        onlineTeachingExperience: Yup.string().required('Required'),
        travel: Yup.string().required('Required'),
        onlineTeaching: Yup.string().required('Required'),
        digitalPen: Yup.string().required('Required'),
        homeworkHelp: Yup.string().required('Required'),
        fullTimeTeacher: Yup.string().required('Required'),
        opportunities: Yup.string().required('Required')
    });

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

    const onSubmit = (values) => {
        mutate({
            "teachingDetails": {
                "charge": values.charge,
                "minimumFee": values.minFee,
                "maximumFee": values.maxFee,
                "feeDetail": values.feeDetails,
                "totalYearOfExperience ": values.totalExperience,
                "yearOfOfflineTeachingExperience": values.teachingExperience,
                "yearOfOnlineTeachingExperience": values.onlineTeachingExperience,
                "willingToTravelToStudent": values.travel,
                "availableForOnlineTeaching": values.onlineTeaching,
                "haveDigitalPen": values.digitalPen,
                "helpWithHomeworkAndAssignment": values.homeworkHelp,
                "currentlyAFullTimeTeacher": values.fullTimeTeacher,
                "opportunitiesIntrestedIn": values.opportunities
            }
        });
        updateFormData('teachingDetail', values);
    };

    return (
        <div className="w-full bg-white relative min-h-screen ">
            <div className="relative max-w-[1281px] mx-auto shadow-lg  sm:mt-0">
                <div className="p-4 sm:p-8 bg-[#F2F6FB]">
                    <h3 className="mb-4 sm:mb-6 text-[black] font-semibold text-lg sm:text-xl">Please enter your teaching details.</h3>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        enableReinitialize
                    >
                        {({ dirty, handleSubmit }) => (
                            <Form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {/* Form Fields */}
                                {[
                                    { name: 'charge', label: 'I charge', placeholder: 'Enter here' },
                                    { name: 'minFee', label: 'Minimum fee', placeholder: 'Enter here' },
                                    { name: 'maxFee', label: 'Maximum fee', placeholder: 'Enter here' },
                                    { name: 'feeDetails', label: 'Fee Details', placeholder: 'Enter here' },
                                    { name: 'totalExperience', label: 'Years of total experience', placeholder: 'Enter here' },
                                    { name: 'teachingExperience', label: 'Years of total teaching experience', placeholder: 'Enter here' },
                                    { name: 'onlineTeachingExperience', label: 'Years of online teaching experience', placeholder: 'Enter here' }
                                ].map(({ name, label, placeholder }) => (
                                    <div key={name} className="flex flex-col">
                                        <label className="text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                                            {label} <span className="text-red-500">*</span>
                                        </label>
                                        <Field
                                            type="text"
                                            name={name}
                                            className="border border-gray-400 p-2 sm:p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                            placeholder={placeholder}
                                        />
                                        <ErrorMessage name={name} component="div" className="text-red-500 text-xs sm:text-sm mt-1" />
                                    </div>
                                ))}

                                {/* Radio Buttons */}
                                {Radiobuttons.map(({ name, label }) => (
                                    <div key={name} className="flex flex-col">
                                        <label className="text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                                            {label} <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                                            {['yes', 'no'].map((option) => (
                                                <button key={option} className="w-full sm:w-[178px] border px-2 py-1 sm:px-3 sm:py-2 rounded-md">
                                                    <label className="flex items-center justify-center sm:justify-start space-x-2">
                                                        <Field
                                                            type="radio"
                                                            name={name}
                                                            value={option}
                                                            className="h-4 w-4 sm:h-5 sm:w-5"
                                                        />
                                                        <span className="text-gray-600 capitalize text-sm sm:text-[16px]">{option}</span>
                                                    </label>
                                                </button>
                                            ))}
                                        </div>
                                        <ErrorMessage name={name} component="div" className="text-red-500 text-xs sm:text-sm mt-1" />
                                    </div>
                                ))}

                                {/* Dropdown */}
                                <div className="flex flex-col">
                                    <label className="text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                                        Opportunities you are interested in <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        as="select"
                                        name="opportunities"
                                        className="border border-gray-400 p-2 sm:p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                    >
                                        <option value="" disabled>Select here</option>
                                        {['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'].map((option) => (
                                            <option value={option} key={option}>{option}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="opportunities" component="div" className="text-red-500 text-xs sm:text-sm mt-1" />
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row justify-left items-center mt-6 sm:mt-8 space-y-4 sm:space-y-0">
                                    <button
                                        type="button"
                                        className="w-full sm:w-[179px] h-[42px] sm:h-[52px] border border-[#0F283C] text-[#0F283C] font-bold text-sm sm:text-[17.36px] rounded-[2px]"
                                        onClick={handlePrevious}
                                    >
                                        &lt; &lt; Previous
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (dirty) {
                                                handleSubmit();
                                            } else {
                                                handleNext()
                                            }
                                        }}
                                        className="w-full sm:w-[179px] h-[42px] sm:h-[52px] mt-0 sm:ml-4 bg-[#0B1F36] text-white font-bold text-sm sm:text-[17.36px] rounded-[4px]"
                                        disabled={isPending}
                                    >
                                        Submit &gt;&gt;
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

export default TeachingDetail;
'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const TeachingDetail = ({ handleNext,handlePrevious }) => {
    const initialValues = {
        charge: '',
        minFee: '',
        maxFee: '',
        feeDetails: '',
        totalExperience: '',
        teachingExperience: '',
        onlineTeachingExperience: '',
        travel: '',
        onlineTeaching: '',
        digitalPen: '',
        homeworkHelp: '',
        fullTimeTeacher: '',
        opportunities: ''
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

    const handleSubmit = (values) => {
        console.log(values);
        handleNext();
    };

    return (
        <div className="w-full bg-white relative min-h-screen">
            <div className="relative max-w-[1281px] mx-auto shadow-lg -mt-8">
                <div className="p-8 bg-[#F2F6FB]">
                    <h3 className="mb-6 text-[black] font-semibold text-xl">Please enter your teaching details.</h3>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                    <label className="text-gray-700 font-medium mb-2">
                                        {label} <span className="text-red-500">*</span>
                                    </label>
                                    <Field
                                        type="text"
                                        name={name}
                                        className="border border-gray-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder={placeholder}
                                    />
                                    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                            ))}

                            {/* Radio Buttons */}
                            {[
                                { name: 'travel', label: 'Are you willing to travel to Student?' },
                                { name: 'onlineTeaching', label: 'Available for online teaching?' },
                                { name: 'digitalPen', label: 'Do you have a digital pen?' },
                                { name: 'homeworkHelp', label: 'Do you help with homework and assignments?' },
                                { name: 'fullTimeTeacher', label: 'Are you a full-time teacher employed by a school/college?' }
                            ].map(({ name, label }) => (
                                <div key={name} className="flex flex-col">
                                    <label className="text-gray-700 font-medium mb-2">
                                        {label} <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        {['yes', 'no'].map((option) => (
                                            <label className="flex items-center cursor-pointer" key={option}>
                                                <Field
                                                    type="radio"
                                                    name={name}
                                                    value={option}
                                                    className="hidden"
                                                />
                                                <div
                                                    className={`w-5 h-5 border-2 rounded-full flex justify-center items-center mr-2 ${option === 'yes' ? 'bg-blue-500 border-blue-500' : 'border-gray-500'}`}
                                                >
                                                    <span className="text-white text-lg">{option === 'yes' ? '✓' : ''}</span>
                                                </div>
                                                <span className="text-gray-600 capitalize">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
                                </div>
                            ))}

                            {/* Dropdown */}
                            <div className="flex flex-col">
                                <label className="text-gray-700 font-medium mb-2">
                                    Opportunities you are interested in <span className="text-red-500">*</span>
                                </label>
                                <Field
                                    as="select"
                                    name="opportunities"
                                    className="border border-gray-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="" disabled>Select here</option>
                                    {['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'].map((option) => (
                                        <option value={option} key={option}>{option}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="opportunities" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-left items-center mt-8">
                                <button
                                    type="button"
                                    className="w-[179px] h-[52px] border border-[#0F283C] text-[#0F283C] font-bold text-sm rounded-[2px]"
                                    onClick={handlePrevious}
                                >
                                    &lt;&lt; Previous
                                </button>
                                <button
                                    type="submit"
                                    className="w-[179px] h-[52px] ml-4 bg-[#0B1F36] text-white font-bold text-sm rounded-[4px]"
                                >
                                    Submit &gt;&gt;
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default TeachingDetail;
import { useState } from 'react';
import Breadcrumb from '../Breadcrum';
import Course from './Course';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import ProfileDescription from './ProfileDescription';
import Subject from './Subject';
import TeachingDetail from './TeachingDetail';
import { useQuery } from '@tanstack/react-query';
import { getTutor } from '@/api/tutor.api';

const formSections = ['Personal Info', 'Education', 'Subject', 'Experience', 'Teaching Detail', 'Profile Description', 'Course'];

const EditProfilePage = () => {
    const [currentStep, setCurrentStep] = useState(3);
    const [formData, setFormData] = useState({
        personalInfo: {},
        education: {},
        subject: {},
        experience: {},
        teachingDetail: {},
        profileDescription: {},
        course: {}
    });

    const handleNext = () => {
        if (currentStep < formSections.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        console.log('Profile Data:', formData);
        alert('Profile updated successfully!');
    };

    const updateFormData = (section, data) => {
        setFormData(prevData => ({
            ...prevData,
            [section]: data
        }));
    };

    const { data } = useQuery({
        queryKey: ["GET_TUTOR"],
        queryFn: getTutor
    });

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <PersonalInfo
                    initialData={data?.personalInfo}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    formData={formData.personalInfo}
                    updateFormData={(data) => updateFormData('personalInfo', data)}
                />;
            case 1:
                return <Education
                    initialData={data?.educationInfo}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    formData={formData.education}
                    updateFormData={(data) => updateFormData('education', data)}
                />;
            case 2:
                return <Subject
                    initialData={data?.subjects}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    updateFormData={(data) => updateFormData('subjects', data)}
                />;
            case 3:
                return <Experience
                    initialData={data?.experience}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    formData={formData.experience}
                    updateFormData={(data) => updateFormData('experience', data)}
                />;
            case 4:
                return <TeachingDetail
                    initialData={data?.teachingDetails}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    updateFormData={(data) => updateFormData('teachingDetail', data)}
                />;

            case 5:
                return <ProfileDescription
                    initialData={data?.profileDescription}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    formData={formData.profileDescription}
                    updateFormData={(data) => updateFormData('profileDescription', data)}
                />;
            case 6:
                return <Course
                    initialData={data?.courses}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    updateFormData={(data) => updateFormData('course', data)}
                    handleSubmit={handleSubmit}
                />;
            default:
                return null;
        }
    };
    return (
        <div className="bg-[#0F283C] mx-0 md:mx-12 rounded-lg md:block grid grid-cols-[80px,auto]">
            <Breadcrumb currentStep={currentStep} steps={formSections} />
            <div className="bg-white rounded shadow-md">{renderStep()}</div>
        </div>
    );
};

export default EditProfilePage;
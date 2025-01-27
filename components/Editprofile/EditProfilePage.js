import { useState } from 'react';
import Breadcrumb from '../Breadcrum';
import Course from './Course';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import ProfileDescription from './ProfileDescription';
import Subject from './Subject';
import TeachingDetail from './TeachingDetail';

const formSections = ['Personal Info', 'Education', 'Subject', 'Experience', 'Teaching Detail', 'Profile Description', 'Course'];

const EditProfile = () => {
    const [currentStep, setCurrentStep] = useState(0);
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

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <PersonalInfo handleNext={handleNext} handlePrevious={handlePrevious} formData={formData.personalInfo} updateFormData={(data) => updateFormData('personalInfo', data)} />;
            case 1:
                return <Education handleNext={handleNext} handlePrevious={handlePrevious} formData={formData.education} updateFormData={(data) => updateFormData('education', data)} />;
            case 2:
                return <Subject handleNext={handleNext} handlePrevious={handlePrevious} formData={formData.subject} updateFormData={(data) => updateFormData('subject', data)} />;
            case 3:
                return <Experience handleNext={handleNext} handlePrevious={handlePrevious} formData={formData.experience} updateFormData={(data) => updateFormData('experience', data)} />;
            case 4:
                return <TeachingDetail handleNext={handleNext} handlePrevious={handlePrevious} formData={formData.teachingDetail} updateFormData={(data) => updateFormData('teachingDetail', data)} />;
            case 5:
                return <ProfileDescription handleNext={handleNext} handlePrevious={handlePrevious} formData={formData.profileDescription} updateFormData={(data) => updateFormData('profileDescription', data)} />;
            case 6:
                return <Course handleNext={handleNext} handlePrevious={handlePrevious} formData={formData.course} updateFormData={(data) => updateFormData('course', data)} handleSubmit={handleSubmit} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-[#0F283C] mx-12 rounded-lg md:block grid grid-cols-2">

            <Breadcrumb currentStep={currentStep} steps={formSections} />
            <div className="bg-white  rounded shadow-md">{renderStep()}</div>
        </div>
    );
};

export default EditProfile;
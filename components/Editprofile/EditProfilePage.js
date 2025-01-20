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
        alert('Profile updated successfully!');
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <PersonalInfo handleNext={handleNext} handlePrevious={handlePrevious} />;
            case 1:
                return <Education handleNext={handleNext} handlePrevious={handlePrevious} />;
            case 2:
                return <Subject handleNext={handleNext} handlePrevious={handlePrevious} />;
            case 3:
                return <Experience handleNext={handleNext} handlePrevious={handlePrevious} />;
            case 4:
                return <TeachingDetail handleNext={handleNext} handlePrevious={handlePrevious} />;
            case 5:
                return <ProfileDescription handleNext={handleNext} handlePrevious={handlePrevious} />;
            case 6:
                return <Course handleNext={handleNext} handlePrevious={handlePrevious} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-[#0F283C]  mx-12 rounded-lg ">
            <Breadcrumb currentStep={currentStep} steps={formSections} />
            <div className="bg-white p-6 rounded shadow-md">{renderStep()}</div>
        </div>
    );
};

export default EditProfile;
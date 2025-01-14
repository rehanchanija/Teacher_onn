import { useRouter } from 'next/router';

const Breadcrumb = ({ steps, currentStep }) => {
    const router = useRouter();

    return (
        <div className="mb-">
            <ul className="flex items-center space-x-5 p-4 ">
                {steps.map((step, index) => (
                    <li key={index} className="flex items-center pt-2">
                        <button
                            onClick={() => router.push(`/edit-profile/${step.toLowerCase().replace(/ /g, '-')}`)}
                            disabled={index > currentStep}
                            className={`text-lg font-semibold ${index === currentStep ? 'text-blue-600' : 'text-gray-400'} hover:text-blue-600`}
                        >
                            {step}
                        </button>
                        {index < steps.length - 1 && <span className="mx-2"></span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breadcrumb;

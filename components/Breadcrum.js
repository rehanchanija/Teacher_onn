import Checked from '@/assets/icons/Checked';
import { useRouter } from 'next/router';
import { FaCheck } from 'react-icons/fa';

const Breadcrumb = ({ steps, currentStep }) => {
    const router = useRouter();

    return (
        <div className="relative md:rounded-lg bg-[#0F283C] ">
            <div className="md:overflow-visible">
                <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 md:p-5 px-4 pt-12 md:whitespace-normal">
                    {steps.map((step, index) => (
                        <li key={index} className="flex flex-col items-center pt-2 md:pl-4 relative">
                            <button
                                onClick={() => router.push(`/edit-profile/${step.toLowerCase().replace(/ /g, '-')}`)}
                                disabled={index > currentStep}
                                className={`text-sm md:text-[18px] font-semibold pb-2 ${index === currentStep ? 'text-white md:underline custom-underline' : index < currentStep ? 'text-white' : 'text-gray-400'}`}
                            >
                                <span>{step}</span>
                            </button>
                            {index < currentStep && (
                                <div className="hidden md:flex absolute top-full -mt-1 justify-center w-full">
                                    <Checked />
                                </div>
                            )} 
                            <span className={`md:hidden w-12 h-12 flex items-center justify-center rounded-full border-2 ${index <= currentStep ? 'border-white' : 'border-gray-400'}`}>
                                {index < currentStep ? <FaCheck className="w-6 h-6" /> : index + 1}
                            </span>
                            {index < steps.length - 1 && <span className="mx-2"></span>}
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .custom-underline {
                    text-decoration-thickness: 2.5px;
                    text-underline-offset: 12px;
                }
            `}</style>
        </div>
    );
};

export default Breadcrumb;
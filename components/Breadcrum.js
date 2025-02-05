import { useRouter } from 'next/router';
import { FaCheck } from 'react-icons/fa';
import Checked from '@/assets/icons/Checked';
import { Check } from 'lucide-react';
import { useRouter } from 'next/router';

const Breadcrumb = ({ steps, currentStep }) => {
    const router = useRouter();

    return (
        <div className="relative md:rounded-lg bg-[#0F283C] border">
            <div className="md:overflow-visible">
                <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4    md:p-5 px-4 pt-12 md:whitespace-normal">
                    {steps.map((step, index) => (
                        <li key={index} className="flex items-center pt-2 md:pl-4 ">
                            <button
                                onClick={() => router.push(`/edit-profile/${step.toLowerCase().replace(/ /g, '-')}`)}
                                disabled={index > currentStep}
                                className={`text-[18px] font-semibold  pb-4 ${index === currentStep ? ' text-white md:underline custom-underline' : index < currentStep ? 'text-white' : 'text-gray-400'
                                    } `}
                            >
                                {/* Show step name on larger screens */}
                                <span className="hidden md:inline  space-x-2">
                                    <span>{step}</span>
                                    {index < currentStep && (
                                        <Checked />
                                    )} {/* Checked icon for previous steps */}
                                </span>
                                {/* Checked icon for previous steps on larger screens */}

                                <span className={`md:hidden w-12 h-12 flex items-center justify-center rounded-full border-2 ${
                                    index <= currentStep ? 'border-white' : 'border-gray-400'
                                }`}>
                                    {index < currentStep ? <FaCheck className="w-6 h-6" /> : index + 1}
                                {/* {index < currentStep && <div className=" w-1 h-8 bg-white mt-2"></div>} */}

                                </span> 
                                 
                            </button>
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
                    text-decoration-thickness: 2.5px; /* Increase the thickness of the underline */
                    text-underline-offset: 12px; /* Increase the space between the text and the underline */
                }
            `}</style>
        </div>
    );
};

export default Breadcrumb;
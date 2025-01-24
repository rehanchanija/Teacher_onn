import { useRouter } from 'next/router';
import CheckedIcon from '@/assets/icons/CheckedIcon';
import Checked from '@/assets/icons/Checked';

const Breadcrumb = ({ steps, currentStep }) => {
    const router = useRouter();

    return (
        <div className="relative">
            <div className="md:overflow-visible">
                <ul className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-5 p-5 md:whitespace-normal">
                    {steps.map((step, index) => (
                        <li key={index} className="flex items-center pt-2 flex-shrink-0">
                            <button
                                onClick={() => router.push(`/edit-profile/${step.toLowerCase().replace(/ /g, '-')}`)}
                                disabled={index > currentStep}
                                className={`text-[18px] font-semibold flex flex-col items-center pb-4 ${
                                    index === currentStep ? 'text-white underline custom-underline' : index < currentStep ? 'text-white' : 'text-gray-400'
                                } `}
                            >
                                {step}
                                {index < currentStep && <Checked className="w-4 h-4 mt-1" />}
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
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Hamburg = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown menu
    const handleCloseDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative">
            {/* Hamburger Icon */}
            <div
                className="w-8 h-8 flex flex-col justify-between items-center cursor-pointer relative z-10"
                onClick={handleDropdownToggle}
            >
                <div className="w-8 h-[4px] bg-black rounded-md"></div>
                <div className="w-8 h-[4px] bg-black rounded-md"></div>
                <div className="w-8 h-[4px] bg-black rounded-md"></div>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <>
                    {/* Background Overlay */}
                    <div className="fixed inset-0 bg-black bg-opacity-60 z-9"></div>

                    {/* Dropdown Content */}
                    <div className="absolute right-0 mt-2 w-[250px] bg-white shadow-lg rounded-md border border-gray-200 z-10 transition-all duration-300">
                        <div className="p-4 relative">
                            {/* Close Button */}
                            <button
                                className="absolute right-2 top-2 text-xl text-gray-700"
                                onClick={handleCloseDropdown}
                            >
                                ✕
                            </button>

                            {/* Dropdown Items */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                                    <Image
                                        src="/client.png" // Replace with your icon image path
                                        alt="Student Icon"
                                        width={21}
                                        height={20}
                                    />
                                    <span className="text-[#667681] text-sm">Student / Client</span>
                                </div>

                                <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                                    <Link href="/TeachersList">
                                        <div className="flex items-center space-x-3 w-full">
                                            <Image
                                                src="/teacher.png" // Replace with your icon image path
                                                alt="Teacher Icon"
                                                width={21}
                                                height={20}
                                            />
                                            <span className="text-[#667681] text-sm">Teacher / Expert</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                                    <Image
                                        src="/wallet.png" // Replace with your icon image path
                                        alt="Wallet Icon"
                                        width={21}
                                        height={20}
                                    />
                                    <span className="text-[#667681] text-sm">Wallet</span>
                                </div>

                                <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                                    <Image
                                        src="/setting.png" // Replace with your icon image path
                                        alt="Settings Icon"
                                        width={21}
                                        height={20}
                                    />
                                    <span className="text-[#667681] text-sm">Settings</span>
                                </div>

                                <Link href="/MyProfile">
                                    <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                                        <Image
                                            src="/profile.png" // Replace with your icon image path
                                            alt="Profile Icon"
                                            width={21}
                                            height={20}
                                        />
                                        <span className="text-[#667681] text-sm">View Profile</span>
                                    </div>
                                </Link>

                                {/* Log Out Item */}
                                <div className="flex items-center space-x-3 bg-[#136FB6] text-white p-3 cursor-pointer w-full rounded-b-md">
                                    <Image
                                        src="/logout.png" // Replace with your icon image path
                                        alt="Log Out Icon"
                                        width={21}
                                        height={20}
                                    />
                                    <span className="text-sm">Log Out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Hamburg;

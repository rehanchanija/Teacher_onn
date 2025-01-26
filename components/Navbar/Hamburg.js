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
                    <div className="absolute right-0 l mt-2 w-[280px] md:w-[376px] bg-white shadow-lg rounded-md border border-gray-210 z-10 transition-all duration-300">
                        <div className="p-4 relative">
                            {/* Close Button */}
                            <button
                                className="absolute right-2 top-2 text-xl text-gray-700"
                                onClick={handleCloseDropdown}
                            >
                                ✕
                            </button>

                            {/* Dropdown Items */}
                            <div className="space-y-3 md:space-y-4">
                                <div >
                                    <div className="mx-2">
                                        <h1 className="text-[22px] font-bold text-[#1667A5]">Accounts</h1>
                                    </div>
                                    <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                                        <Image
                                            src="/client.png" // Replace with your icon image path
                                            alt="Student Icon"
                                            width={21}
                                            height={21}
                                        />
                                        <span className="text-[#667681] text-lg">Student / Client</span>
                                    </div>

                                    <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                                        <Link href="/TeachersList">
                                            <div className="flex items-center space-x-3 w-full">
                                                <Image
                                                    src="/teacher.png" // Replace with your icon image path
                                                    alt="Teacher Icon"
                                                    width={21}
                                                    height={21}
                                                />
                                                <span className="text-[#667681] text-lg">Teacher / Expert</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div>

                                    <div className="flex items-center space-x-3 -mt-4 hover:bg-gray-100 p-2 cursor-pointer">
                                        <Image
                                            src="/wallet.png" // Replace with your icon image path
                                            alt="Wallet Icon"
                                            width={21}
                                            height={21}
                                        />
                                        <span className="text-[#667681] text-lg">Wallet</span>
                                    </div>
                                    <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                                        <Image
                                            src="/jobs.png" // Replace with your icon image path
                                            alt="jobs Icon"
                                            width={21}
                                            height={21}
                                        />
                                        <span className="text-[#667681] text-lg">Jobs</span>
                                    </div>


                                    <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                                        <Image
                                            src="/setting.png" // Replace with your icon image path
                                            alt="Settings Icon"
                                            width={21}
                                            height={21}
                                        />
                                        <span className="text-[#667681] text-lg">Settings</span>
                                    </div>

                                    <Link href="/MyProfile">
                                        <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 cursor-pointer">
                                            <Image
                                                src="/profile.png" // Replace with your icon image path
                                                alt="Profile Icon"
                                                width={21}
                                                height={21}
                                            />
                                            <span className="text-[#667681] text-lg">View Profile</span>
                                        </div>
                                    </Link>


                                </div>
                                {/* Log Out Item */}
                                <div className="flex items-center space-x-3 bg-[#136FB6] text-white p-3  cursor-pointer w-full rounded-b-md">
                                    <Image
                                        src="/logout.png" // Replace with your icon image path
                                        alt="Log Out Icon"
                                        width={21}
                                        height={21}
                                    />
                                    <span className="md:text-lg">Log Out</span>
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

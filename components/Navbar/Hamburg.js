import { setStudent, setTutor } from '@/store/slices/authSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaBook, FaHome, FaInfoCircle, FaStore, FaUserCircle } from 'react-icons/fa';
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Hamburg = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { tutor, student } = useSelector((state) => state.auth);

    const navLinks = [
        { name: "Home", href: "/", icon: FaHome },
        { name: "About Us", href: "/about", icon: FaInfoCircle },
        { name: "IGCSE", href: "/igcse", icon: FaBook },
        { name: "Store", href: "/store", icon: FaStore },
    ];

    const logout = () => {
        toast.success("Logged Out Successfully", { position: "top-right" });
        dispatch(setStudent(null));
        dispatch(setTutor(null));
        router.push("/");
    };

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
            <div onClick={handleDropdownToggle} className=''>
                <div className='md:hidden'>
                    <HiOutlineBars3BottomLeft size={40} />
                </div>
                <div className='hidden md:flex'>
                    <FaUserCircle size={40} color='#136FB6' />
                </div>
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
                                <div>
                                    <div className="mx-2">
                                        <h1 className="text-[22px] font-bold text-[#1667A5]">Accounts</h1>
                                    </div>
                                    <div className="pl-2 pt-2 space-y-4 text-[#667681] flex flex-col md:hidden text-lg items-start hover:bg-gray-100">
                                        {navLinks.map((link, index) => (
                                            <Link key={link.href} href={link.href} className=" flex  items-center space-x-3">
                                                <link.icon size={20} />
                                                <span>{link.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                    <button className="flex items-center pt-4  space-x-3 hover:bg-gray-100 p-2 ">
                                        <Image
                                            src="/client.png" // Replace with your icon image path
                                            alt="Student Icon"
                                            width={21}
                                            height={21}
                                        />
                                        <span className="text-[#667681] text-lg">Student / Client</span>
                                    </button>

                                    <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 ">
                                        <Link href="/TeachersList" onClick={handleCloseDropdown}>
                                            <button className="flex items-center space-x-3 w-full">
                                                <Image
                                                    src="/teacher.png" // Replace with your icon image path
                                                    alt="Teacher Icon"
                                                    width={21}
                                                    height={21}
                                                />
                                                <span className="text-[#667681] text-lg">Teacher / Expert</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <Link href="/" onClick={handleCloseDropdown}>
                                        <button className="flex items-center space-x-3 -mt-4 hover:bg-gray-100 p-2 ">
                                            <Image
                                                src="/wallet.png" // Replace with your icon image path
                                                alt="Wallet Icon"
                                                width={21}
                                                height={21}
                                            />
                                            <span className="text-[#667681] text-lg">Wallet</span>
                                        </button>
                                    </Link>
                                    <Link href="/tutor-job" onClick={handleCloseDropdown}>
                                        <button className="flex items-center space-x-3 hover:bg-gray-100 p-2 ">
                                            <Image
                                                src="/jobs.png" // Replace with your icon image path
                                                alt="jobs Icon"
                                                width={21}
                                                height={21}
                                            />
                                            <span className="text-[#667681] text-lg">Jobs</span>
                                        </button>
                                    </Link>

                                    <Link href="/" onClick={handleCloseDropdown}>
                                        <button className="flex items-center space-x-3 hover:bg-gray-100 p-2 ">
                                            <Image
                                                src="/setting.png" // Replace with your icon image path
                                                alt="Settings Icon"
                                                width={21}
                                                height={21}
                                            />
                                            <span className="text-[#667681] text-lg">Settings</span>
                                        </button>
                                    </Link>
                                    {tutor ? (
                                        <Link href="/profile" onClick={handleCloseDropdown}>
                                            <button className="flex items-center space-x-3 hover:bg-gray-100 p-2 ">
                                                <Image
                                                    src="/profile.png" // Replace with your icon image path
                                                    alt="Profile Icon"
                                                    width={21}
                                                    height={21}
                                                />
                                                <span className="text-[#667681] text-lg">View Profile</span>
                                            </button>
                                        </Link>
                                    ) : null}
                                </div>
                                {tutor || student ? (
                                    <Link href="/" onClick={() => {
                                        handleCloseDropdown();
                                        logout(); // Close dropdown
                                    }}>
                                        <button className="flex items-center space-x-3 bg-[#136FB6] text-white p-3 w-full rounded-b-md">
                                            <Image
                                                src="/logout.png" // Replace with your icon image path
                                                alt="Log Out Icon"
                                                width={21}
                                                height={21}
                                            />
                                            <span className="md:text-lg">Log Out</span>
                                        </button>
                                    </Link>
                                ) : null}

                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Hamburg;
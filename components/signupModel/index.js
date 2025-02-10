import { signupStudent, signupTutor } from '@/api/auth.api';
import { setTutor } from '@/store/slices/authSlice';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const SignupModal = ({ openLoginModal, closeModal }) => {
    const router = useRouter()
    const dispatch = useDispatch();

    const [isTutor, setIsTutor] = useState(false);
    // Track if the user is signing up as a Tutor or Student
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (openLoginModal) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [openLoginModal, closeModal]);
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            mobileNumber: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().required('Password is required'),
            fullName: Yup.string().required('Name is required'),
            mobileNumber: Yup.string().required('Phone is required'),
        }),
        onSubmit: (values) => {
            // Call the appropriate API based on the selected user type (Tutor or Student)
            mutate(values);
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: isTutor ? signupTutor : signupStudent, // Using either signupTutor or signupStudent

        onSuccess: (data) => {
            toast.success('Signup Successful', { position: 'top-center' });
            console.log("Signup Tutor Successful:", data);
            closeModal();
            router.push('/')
            dispatch(setTutor(data))
        },
        onError: (error) => {
            console.log("Signup Error:", error);
        }
    });

    return (
        <div className="    ">
            <div className="relative flex   justify-between    w-full shadow-lg overflow-y-auto md:p-4 p-6 gap-x-8">
                {/* Image on the Right */}
                <div className="flex-1 hidden md:block  relative">
                    <Image
                        src="/image/home/tutorpag.png"
                        alt="Top Right Image"
                        fill
                        className=" "
                    />
                </div>

                {/* Signup Form on the Left */}
                <div className=" flex-1 md:pr-8 md:pt-6  h-full">


                    <div className="md:flex justify-between items-center md:pt-2">
                        <Image src="/Group 2.png" alt="Logo" width={230} height={50} className="cursor-pointer" />
                        <div className="flex items-center space-x-6 py-6">
                            <button
                                onClick={() => setIsTutor(true)}  // Set state to Tutor
                                className={`border-[#E5E5E5] px-4 py-2 rounded-md text-xs font-semibold ${isTutor ? 'border-2' : ''}`}
                            >
                                Tutor
                            </button>
                            <button
                                onClick={() => setIsTutor(false)}  // Set state to Student
                                className={`border-[#E5E5E5] px-4 py-2 rounded-md text-xs font-semibold ${!isTutor ? 'border-2' : ''}`}
                            >
                                Student
                            </button>
                        </div>

                    </div>

                    <p className="text-xl font-bold mt-4 mb-4">Nice to see you! 😊</p>

                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        <div>
                            <label className="ml-2">Email</label>
                            <input
                                type="text"
                                name="email"
                                className="bg-gray-200 p-3 rounded-md w-full mt-1 outline-none"
                                placeholder="Enter your email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
                        </div>

                        <div>
                            <label className="ml-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="bg-gray-200 p-3 rounded-md w-full mt-1 outline-none"
                                placeholder="Enter your password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
                        </div>

                        <div>
                            <label className="ml-2">Name</label>
                            <input
                                type="text"
                                name="fullName"
                                className="bg-gray-200 p-3 rounded-md w-full mt-1 outline-none"
                                placeholder="Enter your name"
                                onChange={formik.handleChange}
                                value={formik.values.fullName}
                            />
                            {formik.errors.fullName && <div className="text-red-500">{formik.errors.fullName}</div>}
                        </div>

                        <div>
                            <label className="ml-2">Phone Number</label>
                            <input
                                type="text"
                                name="mobileNumber"
                                className="bg-gray-200 p-3 rounded-md w-full mt-1 outline-none"
                                placeholder="Enter your phone number"
                                onChange={formik.handleChange}
                                value={formik.values.mobileNumber}
                            />
                            {formik.errors.mobileNumber && <div className="text-red-500">{formik.errors.mobileNumber}</div>}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-bold py-3 w-full rounded-md"
                            disabled={isPending}
                        >
                            Sign Up
                        </button>

                        <p className="text-center mt-2">
                            Already have an account?{' '}
                            <button className="text-blue-500 font-bold cursor-pointer"
                                onClick={() => {
                                    closeModal();
                                    openLoginModal();
                                }}                             >
                                Sign in now
                            </button>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignupModal;

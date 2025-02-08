import { signin, signinStudent, signinTutor } from '@/api/auth.api';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';


const SigninModal = ({ openModal, closeLoginModal }) => {
    const router = useRouter()

    const [isTutor, setIsTutor] = useState(false);
    // Track if the user is signing up as a Tutor or Student
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeLoginModal();
            }
        };

        if (openModal) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [openModal, closeLoginModal]); const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: values => {
            mutate(values)
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: isTutor ? signinTutor : signinStudent, // Using either signupTutor or signupStudent

        onSuccess: (data) => {
            if (isTutor) {
                localStorage.setItem('tutor', JSON.stringify(data))
                router.push('/edit-profile')

            } else {

                localStorage.setItem('student', JSON.stringify(data))
                console.log(data)
            }
            closeLoginModal();
        },
        onError: (error) => {
            console.log("Signup Error:", error);
        }
    });





    return (
        <div className=" h-full  ">
            <div className="relative flex   h-full  justify-between  rounded-lg  w-full shadow-lg overflow-y-auto md:p-4 p-6  gap-x-8">
                {/* Image on the Right */}
                <div className="flex-1 hidden md:block  relative">
                    <Image
                        src="/image/home/tutorpag.png"
                        alt="Top Right Image"
                        fill
                        className=" object-contain "
                    />
                </div>

                {/* Signup Form on the Left */}
                <div className=" flex-1 md:pr-8  h-full">


                    <div className="md:flex justify-between items-center md:mb-4">
                        <Image src="/Group 2.png" alt="Logo" width={230} height={50} className="cursor-pointer pt-4 md:pt-0" />
                        <div className="flex items-center space-x-6 py-8">
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

                    <p className="text-xl font-bold  mb-4">Nice to see you! 😊</p>

                    <form onSubmit={formik.handleSubmit} className='space-y-4'>

                        <div>
                            <p className="ml-2">Login</p>
                            <input
                                type="email"
                                name="email"
                                className="bg-[#E5E5E5] p-3 rounded-md text-black font-semibold w-full mt-2 placeholder:text-[#808080] placeholder:font-normal"
                                placeholder="Email or phone number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-sm">{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div>
                            <p className="ml-2">Password</p>
                            <input
                                type="password"
                                name="password"
                                className="bg-[#E5E5E5] p-3 rounded-md text-black font-semibold w-full mt-2 placeholder:text-[#808080] placeholder:font-normal"
                                placeholder="Enter your password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500 text-sm">{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" name="rememberMe" />
                                <p className="ml-2 text-sm">Remember me</p>
                            </div>
                            <p className="text-sm font-bold text-[#007AFF]">Forgot password?</p>
                        </div>

                        <button type="submit" className="bg-[#007AFF] font-bold text-center py-3 w-full rounded-md text-white" disabled={isPending}

                        >
                            Sign in
                        </button>

                        <span className="flex items-center justify-center">
                            <p>Don&apos;t have an account?</p>
                            <button className="text-[#007AFF] font-bold ml-2"
                                onClick={() => {
                                    openModal()
                                    closeLoginModal()
                                }}
                            >Sign up now</button>
                        </span>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SigninModal;
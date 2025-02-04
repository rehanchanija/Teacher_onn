import { signup } from '@/api/auth.api';
import { useMutation } from '@tanstack/react-query';

import { useFormik } from 'formik';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import * as Yup from 'yup';


const SignupPage = () => {
    const router = useRouter()

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
            mutate(values)

            console.log(values)
        },


    });
    const { mutate, isPending } = useMutation({
        mutationFn: signup,
        onSuccess: (data) => {
            router.push('/')

            console.log("onSuccess", data)
        },
        onError: (error) => {
            console.log("onError", error)
        }
    })



    return (
        <div className="relative bg-[#136FB6] h-[110vh] pt-5 px-4">
            <div
                className="absolute inset-0 bg-[#136FB6]"

            />
            <div className="rounded-2xl flex sm:flex-row flex-col max-w-7xl mx-auto justify-center bg-white">
                <div className="sm:w-[45%] space-y-4 z-20 bg-white p-8 mt-0 sm:rounded-2xl rounded-none sm:rounded-b-none rounded-b-2xl">
                    <div className="flex items-center justify-between">
                        <Image
                            src="/Group 2.png"
                            alt="logo"
                            width={230}
                            height={50}
                            className="cursor-pointer"
                        />
                    </div>
                    <p className="text-xl font-bold">Nice to see you! 😊</p>

                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        <div>
                            <p className="ml-2">Email</p>
                            <input
                                type="text"
                                name="email"
                                className="bg-[#E5E5E5] p-3 rounded-md text-black font-semibold w-full mt-2 placeholder:text-[#808080] placeholder:font-normal"
                                placeholder="Email or phone number"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email && <div className="text-red-500">{formik.errors.email}</div>}
                        </div>
                        <div>
                            <p className="ml-2">Password</p>
                            <input
                                type="password"
                                name="password"
                                className="bg-[#E5E5E5] p-3 rounded-md text-black font-semibold w-full mt-2 placeholder:text-[#808080] placeholder:font-normal"
                                placeholder="Enter your password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.password && <div className="text-red-500">{formik.errors.password}</div>}
                        </div>

                        <div>
                            <p className="ml-2">Name</p>
                            <input
                                type="text"
                                name="fullName"
                                className="bg-[#E5E5E5] p-3 rounded-md text-black font-semibold w-full mt-2 placeholder:text-[#808080] placeholder:font-normal"
                                placeholder="Enter your name"
                                onChange={formik.handleChange}
                                value={formik.values.fullName}
                            />
                            {formik.errors.fullName && <div className="text-red-500">{formik.errors.fullName
                            }</div>}
                        </div>

                        <div>
                            <p className="ml-2">Phone Number</p>
                            <input
                                type="text"
                                name="mobileNumber"
                                className="bg-[#E5E5E5] p-3 rounded-md text-black font-semibold w-full mt-2 placeholder:text-[#808080] placeholder:font-normal"
                                placeholder="Enter your phone number"
                                onChange={formik.handleChange}
                                value={formik.values.mobileNumber}
                            />
                            {formik.errors.mobileNumber && <div className="text-red-500">{formik.errors.mobileNumber}</div>}
                        </div>


                        <button
                            type="submit"
                            className="bg-[#007AFF] font-bold text-center py-3 w-full rounded-md text-white" disabled={isPending}
                        >
                            Sign Up
                        </button>

                        <span className="flex items-center justify-center">
                            <p>Already have an account ?</p>
                            <Link href="/signin">
                                <div>
                                    <p className="text-[#007AFF] font-bold ml-2">Sign in now</p>
                                </div>
                            </Link>
                        </span>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
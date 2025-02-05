import { signin } from '@/api/auth.api';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import * as Yup from 'yup';


const SigninPage = ({ setIsModalOpen }) => {
    const router = useRouter()
    const formik = useFormik({
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
        mutationFn: signin,
        onSuccess: (data) => {
            router.push('/')
            console.log("onSuccess", data)
            localStorage.setItem('tutor', JSON.stringify(data))
        },
        onError: (error) => {
            console.log("onError", error)
        }
    })






    return (
        <div className="relative bg-[#136FB6] h-[110vh] pt-5 px-4">
            <div className="absolute inset-0 bg-[#136FB6]" onClick={() => setIsModalOpen(false)} />
            <div className="rounded-2xl flex sm:flex-row flex-col max-w-7xl mx-auto justify-center bg-white">
                <div className="sm:w-[45%] space-y-4 z-20 bg-white p-8 mt-0 sm:rounded-2xl rounded-none sm:rounded-b-none rounded-b-2xl">
                    <div className="flex items-center justify-between">
                        <Image src="/Group 2.png" alt="logo" width={230} height={50} className="cursor-pointer" />
                    </div>
                    <p className="text-xl font-bold">Nice to see you! 😊</p>
                    <form onSubmit={formik.handleSubmit}>

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

                        <button type="submit" className="bg-[#007AFF] font-bold text-center py-3 w-full rounded-md text-white" disabled={isPending}>
                            Sign in
                        </button>

                        <span className="flex items-center justify-center">
                            <p>Don&apos;t have an account?</p>
                            <Link href="/signup">
                                <button type="button">
                                    <p className="text-[#007AFF] font-bold ml-2">Sign up now</p>
                                </button>
                            </Link>
                        </span>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SigninPage;
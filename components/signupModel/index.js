import { signupStudent, signupTutor } from "@/api/auth.api";
import { setStudent, setTutor } from "@/store/slices/authSlice";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";

const SignupModal = ({ openLoginModal, closeModal, defaultRole }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isTutor, setIsTutor] = useState(defaultRole === "tutor");
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (openLoginModal) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openLoginModal, closeModal]);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      fullName: Yup.string().required("Name is required"),
      mobileNumber: Yup.string().required("Phone is required"),
    }),
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: isTutor ? signupTutor : signupStudent, // Using either signupTutor or signupStudent

    onSuccess: (data) => {
      if (isTutor) {
        dispatch(setTutor(data));
        router.push("/edit-profile");
      } else if (!isTutor) {
        dispatch(setStudent(data));
      }
      toast.success("Signup Successful", { position: "top-right" });
      closeModal();
      router.push("/");
    },
    onError: (error) => {
      toast.error("Signup Failed", { position: "top-right" });
    },
  });

  return (
    <div className="h-full ">
      <div className="relative flex justify-between px-8 flex-1 h-full w-full shadow-lg  gap-x-8">
        <div className="flex-1 hidden md:block relative mt-8">
          {isTutor ? (
            <Image
              src="/image/home/tutor.png"
              alt="Top Right Image"
              fill
              objectFit="contain"
              className="z-10 object-bottom"
            />
          ) : (
            <Image
              src="/image/home/student.png" // Adjust path as needed
              alt="Right Side Full Image"
              layout="fill"
              objectFit="contain"
              className="absolute top-0 left-0 z-20 object-bottom "
            />
          )}
          <Image
            src="/image/home/blue-bg.png" // Adjust path as needed
            alt="Right Side Full Image"
            layout="fill"
            objectFit="contain"
            className="absolute bottom-0 object-bottom"
          />
        </div>

        {/* Signup Form on the Left */}
        <div className="flex-1 py-6 flex flex-col justify-center">
          <div className="sm:flex sm:pace-y-0 space-y-6 justify-between items-center md:pb-0 md:pt-2">
            <Image
              src="/Group 2.png"
              alt="Logo"
              width={230}
              height={50}
              className="cursor-pointer"
            />
            <div className="flex gap-x-4">
              <button
                onClick={() => setIsTutor(true)}
                className={`px-4 py-2 rounded-md text-xs font-semibold transition-all duration-300 border-2 
        ${
          isTutor === true
            ? "border-[#E5E5E5] "
            : "border-transparent hover:border-b-[#E5E5E5] hover:rounded-none"
        }`}
              >
                Tutor
              </button>

              <button
                onClick={() => setIsTutor(false)}
                className={`px-4 py-2 rounded-md text-xs font-semibold transition-all duration-300 border-2 
        ${
          isTutor === false
            ? "border-[#E5E5E5] "
            : "border-transparent hover:border-b-[#E5E5E5] hover:rounded-none"
        }`}
              >
                Student
              </button>
            </div>
          </div>
          <p className="text-xl font-bold mt-4 mb-4">Nice to see you! 😊</p>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="ml-1">Email</label>
              <input
                type="text"
                name="email"
                className="bg-gray-200 p-2.5 rounded-md w-full outline-none"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && (
                <div className="absolute -bottom-[22px] text-sm text-red-500">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="ml-1">Password</label>
              <input
                type="password"
                name="password"
                className="bg-gray-200 p-2.5 rounded-md w-full outline-none"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password && (
                <div className="absolute -bottom-[22px] text-sm text-red-500">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="ml-1">Name</label>
              <input
                type="text"
                name="fullName"
                className="bg-gray-200 p-2.5 rounded-md w-full outline-none"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
              {formik.errors.fullName && (
                <div className="absolute -bottom-[22px] text-sm text-red-500">
                  {formik.errors.fullName}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="ml-1">Phone Number</label>
              <input
                type="text"
                name="mobileNumber"
                className="bg-gray-200 p-2.5 rounded-md w-full outline-none"
                placeholder="Enter your phone number"
                onChange={formik.handleChange}
                value={formik.values.mobileNumber}
              />
              {formik.errors.mobileNumber && (
                <div className="absolute -bottom-[22px] text-sm text-red-500">
                  {formik.errors.mobileNumber}
                </div>
              )}
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-3 w-full  rounded-md"
                disabled={isPending}
              >
                Sign Up
              </button>
            </div>

            <p className="text-center mt-2">
              Already have an account?{" "}
              <button
                className="text-blue-500 font-bold cursor-pointer"
                onClick={() => {
                  closeModal();
                  openLoginModal();
                }}
              >
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

import { signinStudent, signinTutor } from "@/api/auth.api";
import { setTutor } from "@/store/slices/authSlice";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";

const SigninModal = ({ openModal, closeLoginModal }) => {
  const router = useRouter();
  const [isTutor, setIsTutor] = useState(null);
  const modalRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeLoginModal();
      }
    };

    if (openModal) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openModal, closeLoginModal]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: isTutor ? signinTutor : signinStudent,
    onSuccess: (data) => {
      toast.success("Login Successful", { position: "top-center" });
      dispatch(setTutor(data));
      closeLoginModal();
      router.push("/edit-profile");
    },
    onError: (error) => {
      toast.error("Login Failed", error, { position: "top-center" });
    },
  });

  return (
    <div className="h-full">
      <div className="relative flex justify-between px-8 flex-1 h-full w-full shadow-lg  gap-x-8">
        {/* Image on the Right */}
        <div className=" flex-1 hidden md:block relative mt-8">
          <Image
            src="/image/home/tutor.png"
            alt="Top Right Image"
            fill
            className="object-contain z-10 object-bottom"
          />
          <Image
            src="/image/home/blue-bg.png" // Adjust path as needed
            alt="Right Side Full Image"
            fill
            objectFit="contain"
            className="absolute bottom-0 object-bottom"
          />
        </div>

        {/* Signin Form on the Left */}
        <div className="flex-1 py-6 flex flex-col justify-center">
          <div className="sm:flex sm:pace-y-0 space-y-6 justify-between items-center md:pb-0 md:pt-2">
            <Image
              src="/Group 2.png"
              alt="Logo"
              width={230}
              height={50}
              className="cursor-pointer pt-4 md:pt-0"
            />
          </div>

          <p className="text-xl font-bold mb-4">Nice to see you! 😊</p>
          <div className="flex-1">
            <form onSubmit={formik.handleSubmit} className="space-y-6 flex-1">
              <div className="relative">
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
                  <div className="text-red-500 text-sm absolute -bottom-[22px]">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="relative">
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
                  <div className="text-red-500 text-sm absolute -bottom-[22px]">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" name="rememberMe" />
                  <p className="ml-2 text-sm">Remember me</p>
                </div>
                <p className="text-sm font-bold text-[#007AFF]">
                  Forgot password?
                </p>
              </div>

              <button
                type="submit"
                className="bg-[#007AFF] font-bold text-center py-3 w-full rounded-md text-white"
                disabled={isPending}
              >
                Sign in
              </button>

              <span className="flex items-center justify-center">
                <p>Don&apos;t have an account?</p>
                <button
                  className="text-[#007AFF] font-bold ml-2"
                  onClick={() => {
                    openModal();
                    closeLoginModal();
                  }}
                >
                  Sign up now
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninModal;


import { GoogleSVG } from "@/public/svg";
import Image from "next/image";
import { useState } from "react";
// import { useMutation } from "react-query";
// import { toast } from "react-toastify";

const Login = ({ setIsModalOpen, signIn, setSignIn }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    let errors = [];

    // const { login } = useContext(UserContext);

    // const { mutate: SignUpMutate } = useMutation((data) => signUp(data), {
    //     onSuccess: (data) => {
    //         console.log("data", data);
    //         if (data.data.loginStatus === "exist") {
    //             toast.error("User already exist");
    //         } else {
    //             localStorage.setItem("token", data.data.token);
    //             localStorage.setItem("user", JSON.stringify(data.data.data));
    //             localStorage.setItem("userId", data.data.data._id);
    //             toast.success("Sign up successful");
    //             setIsModalOpen(false);
    //         }
    //     },
    //     onError: (error) => {
    //         console.log("error", error);
    //         toast.error("Sign up failed");
    //     },
    // });

    // const { mutate: loginMutate } = useMutation((data) => loginMutation(data), {
    //     onSuccess: async (data) => {
    //         console.log("data", data);
    //         if (data.data.loginStatus === "notExist") {
    //             toast.error("User not exist");
    //         } else if (data.data.loginStatus === "wrongPassword") {
    //             toast.error("Wrong password");
    //         } else if (data.data.loginStatus === "success") {
    //             login(data.data);
    //             toast.success("Login successful");
    //             setIsModalOpen(false);
    //         } else {
    //             toast.error("Login failed");
    //         }
    //     },
    //     onError: (error) => {
    //         console.log("error", error);
    //         toast.error("Login failed");
    //     },
    // });

    // const handleLogin = () => {
    //     console.log("Email", email, password);
    //     if (!email) {
    //         errors.push("Email is required");
    //     }
    //     if (!password) {
    //         errors.push("Password is required");
    //     }
    //     if (errors.length > 0) {
    //         toast.error(errors[0]);
    //     }
    //     loginMutate({
    //         Email: email,
    //         Password: password,
    //     });
    // };
    // const handleSignUp = () => {
    //     console.log("Name", name, email, phone, password);
    //     if (!name) {
    //         errors.push("Name is required");
    //     }
    //     if (!email) {
    //         errors.push("Email is required");
    //     }
    //     if (!phone) {
    //         errors.push("Phone is required");
    //     }
    //     if (!password) {
    //         errors.push("Password is required");
    //     }
    //     if (errors.length > 0) {
    //         toast.error(errors[0]);
    //     }
    //     SignUpMutate({
    //         UserName: name,
    //         Password: password,
    //         Mobile: phone,
    //         Email: email,
    //     });
    // };

    return (
        <div className="relative bg-[#136FB6] h-[110vh] pt-5 px-4">
            <div
                className="absolute inset-0 bg-[#136FB6]"
                onClick={() => setIsModalOpen(false)}
            />
            <div className="rounded-2xl  flex sm:flex-row flex-col max-w-7xl mx-auto justify-center bg-white">
                {/* <div className="sm:w-[55%]  z-20">
                    <Image
                        src="/loginpic.png"
                        alt="Login"
                        width={300}
                        height={500}

                        className="w-full h-full sm:rounded-t-none rounded-t-2xl"
                    />
                </div> */}
                <div className="sm:w-[45%] space-y-4 z-20 bg-white p-8 mt-0 sm:rounded-2xl rounded-none sm:rounded-b-none rounded-b-2xl">
                    <div className="flex items-center justify-between">
                        <Image
                            src="/Group 2.png"
                            alt="logo"
                            width={230}
                            height={50}
                            className="cursor-pointer"
                        />
                        <div className="flex items-center space-x-6">
                            <button
                                // onClick={() => setSignIn(true)}
                                className="border-[#E5E5E5] px-4 py-2 rounded-md text-xs font-semibold"
                                style={{
                                    borderWidth: signIn ? "2px" : 0,
                                }}
                            >
                                Sign in
                            </button>
                            <button
                                onClick={() => setSignIn(false)}
                                className="border-[#E5E5E5] px-4 py-2 rounded-md text-xs font-semibold"
                                style={{
                                    borderWidth: signIn ? 0 : "2px",
                                }}
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                    <p className="text-xl font-bold">Nice to see you! 😊</p>

                    <div className="space-y-4">
                        <div>
                            <p className="ml-2">{signIn ? "Login" : "Email"}</p>
                            <input
                                type="text"
                                className="bg-[#E5E5E5] p-3 rounded-md text-black font-semibold w-full mt-2 placeholder:text-[#808080] placeholder:font-normal"
                                placeholder="Email or phone number"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        <div>
                            <p className="ml-2">Password</p>
                            <input
                                type="password"
                                className="bg-[#E5E5E5] p-3 rounded-md text-black font-semibold w-full mt-2 placeholder:text-[#808080] placeholder:font-normal"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        {!signIn && (
                            <div>
                                <p className="ml-2">Name</p>
                                <input
                                    type="text"
                                    className="bg-[#E5E5E5] p-3 rounded-md text-black font-semibold w-full mt-2 placeholder:text-[#808080] placeholder:font-normal"
                                    placeholder="Enter your name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                        )}
                        {!signIn && (
                            <div>
                                <p className="ml-2">Phone Number</p>
                                <input
                                    type="text"
                                    className="bg-[#E5E5E5] p-3 rounded-md text-black font-semibold w-full mt-2 placeholder:text-[#808080] placeholder:font-normal"
                                    placeholder="Enter your phone number"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </div>
                        )}
                        {signIn && (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input type="checkbox" name="" id="" />
                                    <p className="ml-2 text-sm">Remember me</p>
                                </div>
                                <p className="text-sm font-bold text-[#007AFF]">
                                    Forgot password?
                                </p>
                            </div>
                        )}
                        <button
                            onClick={() => (signIn ? handleLogin() : handleSignUp())}
                            className="bg-[#007AFF] font-bold text-center py-3 w-full rounded-md text-white"
                        >
                            {signIn ? "Sign In" : "Sign Up"}
                        </button>
                        {signIn ? (
                            <div className="space-y-4">
                                <div className="py-3">
                                    <hr />
                                </div>
                                <button className="bg-[#333333] font-bold text-center py-3 w-full rounded-md text-white flex items-center justify-center space-x-2">
                                    <GoogleSVG />
                                    <p>or Sign in with Google</p>
                                </button>
                                <span className="flex items-center justify-center">
                                    <p>Dont have an account ?</p>
                                    <button onClick={() => setSignIn(false)}>
                                        <p className="text-[#007AFF] font-bold ml-2">Sign up now</p>
                                    </button>
                                </span>
                            </div>
                        ) : (
                            <span className="flex items-center justify-center">
                                <p>Already have an account ?</p>
                                <button onClick={() => setSignIn(true)}>
                                    <p className="text-[#007AFF] font-bold ml-2">Sign in now</p>
                                </button>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

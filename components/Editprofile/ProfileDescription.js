'use client';

// components/ProfileDescriptionForm.js
import { useState } from "react";
import { updateTutor } from "@/api/tutor.api";
import { useMutation } from "@tanstack/react-query";

const ProfileDescription = ({ handleNext, handlePrevious }) => {
    // States to track the selected radio buttons
    const [description, setDescription] = useState("");
    const [noContactDetails, setNoContactDetails] = useState(false);

    const { mutate, isPending } = useMutation({
        mutationFn: updateTutor,
        onSuccess: (data) => {
            handleNext();
            localStorage.setItem("tutor", JSON.stringify(data))
            console.log("onSuccess", data)
        },
        onError: (error) => {
            console.log("onError", error)
        }
    })

    const handleSubmit = () => {
        if (!noContactDetails) {
            alert("Please confirm that you have not shared any contact details");
            return;
        }
        mutate({
            
                "profileDescription": description,
            
            }
        );
    };

    return (
        <div className="w-full bg-white relative min-h-screen">
            <div className="relative max-w-[1281px] mx-auto shadow-lg">
                <div className="p-4 md:p-8 bg-[#F2F6FB]">
                    <h3 className="mb-6 text-[black] font-semibold text-xl">Please enter your profile description.</h3>
                    <div className="mb-6">
                        <p className="text-base font-semibold text-[#4E5865] mb-2">This is the most important section for you. *</p>
                        <p className="text-lg font-semibold text-[#146FB6] mb-2">80% of students will decide if they want to hire you just based on what you write here.</p>
                        <p className="text-base text-[#4E5865] font-semibold italic mb-4">Make sure its good, relevant, in detail, and without mistakes.</p>
                        <p className="text-base text-[#4E5865] font-semibold italic mb-4">Do not copy-paste your resume here.</p>
                        <div className="inline-block bg-[#136EB4] py-1 px-3 rounded mb-4">
                            <p className="text-base font-semibold italic text-white">Do not share any contact details.</p>
                        </div>
                    </div>

                    {/* Profile Description Editor */}
                    <div className="border border-[#0F283C] rounded-lg p-4 md:p-8 bg-[#F2F6FB] mb-6 text-[#0F283C]">
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full h-64 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your profile description here..."
                        />
                    </div>

                    {/* Power Profile Section */}
                    <div className="inline-block bg-[#18A61E] py-2 px-4 md:px-10 rounded mb-4">
                        <p className="text-white text-base font-semibold italic">Power Profile: 95.5%</p>
                    </div>

                    {/* Checkbox */}
                    <div className="mb-6">
                        <label className="flex items-center">
                            <input 
                                type="checkbox" 
                                className="mr-2"
                                checked={noContactDetails}
                                onChange={(e) => setNoContactDetails(e.target.checked)}
                            />
                            <span className="text-base text-[#4E5865]">I have not shared any contact details (Email, Phone, Skype, Website, etc)</span>
                        </label>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col md:flex-row justify-start gap-2">
                        <button className="px-4 md:px-6 py-2 border border-[#0F283C] font-bold text-[#0F283C] w-full md:w-[179px] h-[52px] rounded text-base"
                            onClick={handlePrevious}
                        >
                            &lt;&lt; Previous
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={isPending}
                            className="px-4 md:px-6 py-2 bg-[#0B1F36] text-white rounded w-full md:w-[179px] h-[52px] font-bold text-base">
                            Next &gt;&gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDescription;
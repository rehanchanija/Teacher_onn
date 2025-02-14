import React from 'react'

const TutorHome = () => {
    return (
        <div className='mx-12 relative   z-50 '>

            <div className=" max-w-6xl absolute right-0 left-0 -top-24 mx-auto rounded-lg bg-[#0F283C] p-4 sm:p-7 ">

                <p className="text-white text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-gilroy mb-4 sm:mb-6 font-semibold">
                    Find online teachers and home tutors for free!
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <input type="text" placeholder="Subject/Skill" className="w-full sm:w-1/3 h-[40px] sm:h-[52px] bg-white text-[#0F283C] px-4 rounded-[4px]" />
                    <input type="text" placeholder="Location" className="w-full sm:w-1/3 h-[40px] sm:h-[52px] bg-white text-[#0F283C] px-4 rounded-[4px]" />
                    <button className="w-full sm:w-[179px] h-[40px] sm:h-[52px] bg-[#1BADFF] text-white text-[14px] md:text-[17px] rounded-[4px]">
                        Book Demo
                    </button>
                </div>
            </div>
        </div>)
}

export default TutorHome
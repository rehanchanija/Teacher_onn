
import Image from 'next/image';
const TutorsPage = () => {
    return (
        <div className="relative w-full font-gilroy overflow-hidden">
            {/* Background section remains fixed */}
            <div className="bg-[#136FB6] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] w-full absolute top-0 left-0 right-0 z-[-1]"></div>

            <div className="flex flex-col md:flex-row items-center justify-around  ">
                {/* Left section (Text on top on small screens) */}
                <div className="order-2 md:order-1 md:text-left text-center bg-[#136FB6] text-white  sm:max-w-[80%] md:max-w-[600px] py-12 md:py-0 px-4 sm:px-8">
                    <h1 className="text-[28px]  sm:text-[40px] md:text-[50px] lg:text-[60px] font-gilroy leading-tight">
                        Join Live Online Or
                    </h1>
                    <p className="text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-gilroy-bold">
                        <span className="border-b-4 sm:border-b-8 border-[#1BADFF]">Offline</span> Classes with
                    </p>
                    <p className="text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-gilroy-bold">
                        The <span className="text-[#1BADFF]">Best Tutors</span>
                    </p>
                    <p className="text-white text-[12px]  sm:text-[14px] md:text-[16px] lg:text-[20px] mt-4 md:mt-8">
                        At Direction Classes, we believe in empowering students through education and guiding them toward a successful future.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8">
                        <button className="bg-white text-[#1268AA] text-[12px] sm:text-[14px] md:text-[17px] w-full sm:w-[140px] md:w-[179px] h-[40px] md:h-[52px] rounded-[4px]">
                            Join as a Student
                        </button>
                        <button className="bg-[#1BADFF] text-white text-[12px] sm:text-[14px] md:text-[17px] w-full sm:w-[140px] md:w-[179px] h-[40px] md:h-[52px] rounded-[4px]">
                            Join as a Tutor
                        </button>
                    </div>
                </div>

                {/* Right section (Image moves up on small screens) */}
                <div className="order-1 md:order-2 relative mt-6 md:mt-0">
                    <Image
                        src="/image/home/tutorpag.png"
                        alt="Top Right Image"
                        width={465}
                        height={684}
                        className="w-[300px] sm:w-[400px] md:w-[465px] h-auto mx-auto"
                    />
                    <div className="absolute top-[150px] sm:top-[200px] md:top-[246px] right-4 sm:right-8 md:right-auto md:left-[calc(50%+10px)] bg-white w-[180px] sm:w-[200px] md:w-[214px] h-auto p-4 rounded-[20px] shadow-md">
                        <ul className="space-y-2 sm:space-y-3">
                            {["Customized Plan", "Science Lab", "Test Series", "8+ Lessons 4"].map((text, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <Image
                                        src="/bullets.png"
                                        alt="Bullet Icon"
                                        width={20}
                                        height={20}
                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                    />
                                    <span className="text-black text-[12px] sm:text-[14px] md:text-[16px]">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl md:mx-10 mx-4 rounded-lg left-4 right-4 bg-[#0F283C] p-4 sm:p-6 md:mt-4 mt-2">
                <p className="text-white text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-gilroy-bold mb-4 sm:mb-6">
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
        </div>
    );
}

export default TutorsPage;

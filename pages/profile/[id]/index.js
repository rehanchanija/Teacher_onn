import { getTutor } from "@/api/tutor.api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const router = useRouter();

  console.log(router.query);

  const { tutor } = useSelector((state) => state.auth);
  const { data } = useQuery({
    queryKey: ["GET_TUTOR", router.query.id],
    queryFn: getTutor,
    enabled: !!router.query.id,
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Banner */}
      <div className="w-full min-h-[180px] md:min-h-[236px] bg-[#136FB6] flex justify-center items-center text-center">
        <div className="text-white px-4">
          <h1
            className="md:text-[40px] text-[30px] pb-2 xl:text-[60px] font-bold"
            style={{ fontFamily: "Gilroy" }}
          >
            {data?.personalInfo?.fullName}
          </h1>
          <p
            className="text-lg lg:text-[20px]"
            style={{ fontFamily: "Gilroy" }}
          >
            Get The Right Tutor You Deserve
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white px-4 py-8 md:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar */}
            <div className="w-full lg:w-[395px] space-y-6">
              {/* Profile Card */}
              <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/profile1.png"
                    alt="Profile"
                    width={361}
                    height={144}
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <h2
                      className="text-xl md:text-[20px] font-bold text-[#01354B]"
                      style={{ fontFamily: "Gilroy-Bold" }}
                    >
                      {data?.personalInfo?.fullName}
                    </h2>
                    <p
                      className="text-[#667681] text-base"
                      style={{ fontFamily: "Gilroy-Medium" }}
                    >
                      {data?.personalInfo?.speciality}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.61L12 2 9.91 8.63 3 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[#146DB2] text-base">
                        4.5 Review
                      </span>
                    </div>

                    {/* Fees and Experience */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-black">Fees:</span>
                        <span className="text-[#667681]">
                          {data?.teachingDetails?.feeDetail}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-black">Exp:</span>
                        <span className="text-[#667681]">
                          {data?.teachingDetails?.totalYearOfExperience}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Icons */}
                  <div className="flex gap-2">
                    <Image src="/call.png" alt="Call" width={38} height={38} />
                    <Image
                      src="/videocall.png"
                      alt="Video Call"
                      width={38}
                      height={38}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <button
                    className="flex-1 bg-[#121212] text-white h-11 rounded-md text-lg font-bold"
                    onClick={() => {
                      if (tutor) {
                        router.push("/edit-profile");
                      } else {
                      }
                    }}
                  >
                    {tutor?._id === data?._id ? "Edit Profile" : "Book Now"}
                  </button>
                  <button className="w-24 border border-[#667681] text-[#667681] h-11 rounded-md text-lg">
                    Share
                  </button>
                </div>
              </div>

              {/* About Me Section */}
              <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
                <h2 className="text-xl font-bold text-[#01354B]">
                  About Me <span className="text-[#FF281B]">*</span>
                </h2>
                <p className="mt-2 text-[#81919C] text-base leading-relaxed">
                  {data?.profileDescription?.description}
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
                <h2 className="text-xl font-bold text-[#01354B]">
                  Contact Information <span className="text-[#FF281B]">*</span>
                </h2>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-[#81919C]">Location</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Image
                        src="/location.png"
                        alt="Location"
                        width={10}
                        height={14}
                      />
                      <span className="text-[#136FB6]">
                        {data?.personalInfo?.city}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[#81919C]">Email Address</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Image
                        src="/mail.png"
                        alt="Email"
                        width={15}
                        height={10}
                      />
                      <span className="text-[#136FB6]">
                        {data?.personalInfo?.email}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[#81919C]">Languages</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {["English", "Hindi", "Urdu"].map((lang) => (
                        <span
                          key={lang}
                          className="bg-[#DAE7F1] px-3 py-1 rounded text-[#475967]"
                        >
                          {data?.courses?.[0]?.language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 space-y-6">
              {/* Education */}
              <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
                <h2 className="text-xl font-bold text-[#01354B] mb-4">
                  Education Background <span className="text-[#FF281B]">*</span>
                </h2>
                {data?.educationInfo?.map((educationInfo, index) => (
                  <div className="flex gap-4">
                    <Image
                      src="/education.png"
                      alt="Education"
                      width={61}
                      height={61}
                    />
                    <div>
                      <h3 className="text-[#01354B] text-xl font-bold">
                        {educationInfo?.degreeName}
                      </h3>
                      <p className="text-[#81919C]">
                        {educationInfo?.instituteWithCity}
                      </p>
                      <p className="text-[#81919C]">
                        {educationInfo?.startDate} – {educationInfo?.endDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subjects */}
              <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
                <h2 className="text-xl font-bold text-[#01354B] mb-4">
                  Subjects <span className="text-[#FF281B]">*</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {data?.subjects?.map((subject, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Image
                        src="/subjects.png"
                        alt="Subject"
                        width={61}
                        height={61}
                      />
                      <div>
                        <h3 className="text-[#01354B] text-lg">
                          {subject?.subject}
                        </h3>
                        <p className="text-[#81919C]">
                          {subject?.fromLevel} - {subject?.toLevel}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
                <h2 className="text-xl font-bold text-[#01354B] mb-4">
                  Experience <span className="text-[#FF281B]">*</span>
                </h2>
                {data?.experience?.map((experience, index) => (
                  <div className="flex gap-4">
                    <Image
                      src="/academic.png"
                      alt="Experience"
                      width={61}
                      height={61}
                    />
                    <div>
                      <h3 className="text-[#01354B] text-xl">
                        {experience?.designation}
                      </h3>
                      <p className="text-[#81919C]">
                        {experience?.organization}
                      </p>
                      <p className="text-[#81919C]">
                        {experience?.startDate} – {experience?.endDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reviews */}
              <div className="bg-white border border-[#DCE3E8] rounded-md p-4">
                <h2 className="text-xl font-bold text-[#01354B] mb-4">
                  Reviews <span className="text-[#FF281B]">*</span>
                </h2>
                <p className="text-[#667681]">
                  No reviews yet. Be the first one to review this tutor.
                </p>
                <a href="#" className="text-[#146DB2] mt-2 inline-block">
                  Review this tutor
                </a>
              </div>

              {/* Video Section */}
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/introvideo.png"
                  alt="Video Thumbnail"
                  width={863}
                  height={418}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

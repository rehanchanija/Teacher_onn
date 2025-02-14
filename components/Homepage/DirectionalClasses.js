import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DirectionalClasses = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-r from-[#091E3A] via-[#2F80ED]   to-[#2D9EE0]">

      <div className=" md:flex max-w-6xl mx-auto justify-around md:pt-10   md:mb-24 md:rounded-xl">
        <div className="bg-[#7e7f83] md:mx-6 rounded-t-[4rem]">
          <div className="bg-[#091E3A] rounded-t-[4rem] mx-6 mt-4">
            <Image
              src="/image/home/businessman.png"
              width={425}
              height={490}
              alt="businessman"
            />
          </div>
        </div>
        <div className="w-full lg:w-[50%] text-[20px] pt-6 md:pt-0  text-white pl-4 md:pl-8">
          <Link href="#" className="pt-2 text-[18px]">
            ~ JOIN US NOW ~
          </Link>
          <h1 className="text-[3.1rem] pb-3 font-semibold">DIRECTION CLASSES</h1>
          <p className="pb-4 text-[20px]">
            YOUR ONE-STOP PLACE FOR THOSE WHO WANT TO GET A+ GRADE IN ALL
            SUBJECTS IN THEIR BOARDS
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mx-0 mx-4">
              {/* Name Input */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                className="w-full sm:w-[200px] xl:w-[253px] h-[52px] bg-transparent border border-white text-white placeholder-white text-lg rounded px-4 focus:outline-none"
                required
              />

              {/* Phone Number Input */}
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="w-full  sm:w-[200px] xl:w-[253px] h-[52px] bg-transparent border border-white text-white placeholder-white text-lg rounded px-4 focus:outline-none"
                required
              />
            </div>

            <div className="px-4 md:px-0">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="sm:w-[200px] xl:w-[253px] w-full h-[52px] bg-transparent border border-white text-white placeholder-white text-lg rounded px-4 focus:outline-none mb-4 "
                required
              />
            </div>

            <br />
            {/* Submit Button */}
            <div className="px-4 md:px-0">

              <button
                type="submit"
                className=" bg-white text-[#1268AA] w-full md:w-[253px] font-semibold mx-auto rounded py-3 text-[17.36px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DirectionalClasses;

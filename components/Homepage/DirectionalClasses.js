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
    <div className="bg-gradient-to-r from-[#091E3A] via-[#2F80ED]   to-[#2D9EE0] mx-4 md:mx-12 rounded-2xl">

      <div className=" md:flex max-w-6xl mx-auto justify-around   md:rounded-xl">
        <Image
          src="/image/home/direction-classes.png"
          width={425}
          height={490}
          alt="businessman"
        />
        <div className="w-full lg:w-[50%]  pt-6 md:pt-12 px-4 text-white pl-4 md:pl-8">
          <Link href="#" className="pt-2 font-medium text-[14px] md:text-[18px]">
            ~ JOIN US NOW ~
          </Link>
          <h1 className="xl:text-[50px] text-[30px] md:text-[40px] pb-3 font-bold">DIRECTION CLASSES</h1>
          <p className="pb-6 text-[14px] md:text-[20px]">
            YOUR ONE STOP PLACE THOSE WO WANT TO GET A+ GRADE IN ALL SUBJECTS IN THEIR BOARDS
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-4  md:space-y-0 mb-4 md:space-x-4  md:mx-0 ">
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

            <div className="">
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
            <div className="pb-10">

              <button
                type="submit"
                className=" bg-white text-[#1268AA] w-full md:w-auto  md:px-8 font-semibold mx-auto rounded py-3 text-[17.36px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default DirectionalClasses;

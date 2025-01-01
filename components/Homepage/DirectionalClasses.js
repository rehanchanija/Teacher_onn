import Image from "next/image";
import Link from "next/link";

const DirectionalClasses = () => {
  return (
    <div className="bg-gradient-to-r from-[#091E3A] via-[#2F80ED] to-[#2D9EE0] flex justify-around md:pt-10  md:px-8 m-8 rounded-xl">
      <div className="bg-[#CED3E6]  md:mx-6 rounded-t-[4rem]">
        <div className="bg-[#091E3A] rounded-t-[4rem] mx-6 mt-4 ">
          <Image
            src="/image/home/businessman.png"
            width={425}
            height={490}
            alt="reload"
            className=""
          />
        </div>
      </div>
      <div className="w-[685px] text-[20px]  text-white pl-8 ">
        <Link href="" className=" pt-2 text-[18px]">
          ~ JOIN US NOW ~
        </Link>
        <h1 className="text-[3.1rem] pb-3  font-semibold ">
          DIRECTION CLASSES
        </h1>
        <p className=" pb-4 text-[20ppx]   ">
          YOUR ONE STOP PLACE THOSE WO WANT TO GET A+ GRADE IN ALL SUBJECTS IN
          THEIR BOARDS
        </p>
        {/* <form className="grid-cols-2 text-[18px]  ">
          <input placeholder="Name*" className="py-2 pr-2"></input>
          <input placeholder="Phone Number*" className="py-2 px-2"></input>
          <input placeholder="Email*" className="py-2 px-2"></input>
        </form> */}
        <button className="bg-white text-[#1268AA]  w-[179.36px] font-semibold rounded py-3 text-[17.36px] ">
          <Link href="">Send Message</Link>
        </button>
      </div>
    </div>
  );
};

export default DirectionalClasses;

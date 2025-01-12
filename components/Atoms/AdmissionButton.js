import CheckedIcon from "@/assets/icons/CheckedIcon";
import Image from "next/image";
import Link from "next/link";

const AdmissionButton = () => {
  return (
    // <div></div>
    <div className="text-[20px] grid md:grid-cols-2 gap-4 font-medium md:pt-6 ">
      <div className="flex items-center space-x-2">
        <button className="bg-[#7B82CA] text-2xl text-white p-2 rounded-full ">
          <Link href="">
            <CheckedIcon />
          </Link>
        </button>
        <h1 className="">Customised Plans</h1>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-[#72B482] text-2xl text-white p-2 rounded-full ">
          <Link href="">
            <CheckedIcon />
          </Link>
        </button>
        <h1>Science Lab</h1>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-[#CEA27F] text-2xl text-white p-2 rounded-full ">
          <Link href="">
            <CheckedIcon />
          </Link>
        </button>
        <h1>Text Series</h1>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-[#D17D7B] text-2xl text-white p-2 rounded-full ">
          <Link href="">
            <CheckedIcon />
          </Link>
        </button>
        <h1>8+ more lessons</h1>
      </div>
      <div className="flex space-x-4 pt-6">
        <button className="bg-[#1BADFF]     w-[179.36px]  rounded py-2 text-white text-[17.36px] ">
          <Link href="">Enroll Now</Link>
        </button>
        <Image
          src="/image/home/vectorblack.png"
          width={49.22}
          height={59.77}
          alt="reload"
        />
      </div>
    </div>
  );
};

export default AdmissionButton;

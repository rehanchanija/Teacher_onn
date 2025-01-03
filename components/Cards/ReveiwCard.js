import Image from "next/image";
import Link from "next/link";
import ReveiwIcon from "../Atoms/ReveiwIcon";

const ReveiwCard = () => {
  const images = ["reveiw1", "reveiw2", "reveiw3"];

  return (
    <div className="border-l-2">
      <div className="w-[167px] h-[191px] text-white mx-6 py-2">
        <span className="flex ">
          <Link href="" className="pr-2  text-[22px]  ">
            4.9
          </Link>
          <Image
            src="/image/home/rate.png"
            width={99}
            height={17.57}
            alt="aaa"
          />
        </span>
        <div className="flex ">
          {images.map((img, index) => (
            <ReveiwIcon image={img} key={index} />
          ))}
        </div>
        <h1 className="text-[40px] font-bold   ">500M + </h1>
        <span className="text-[22px] "> Student Reveiws</span>
      </div>
    </div>
  );
};

export default ReveiwCard;

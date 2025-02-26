import Link from "next/link";
import ReveiwIcon from "../Atoms/ReveiwIcon";
import { Rating } from "@smastrom/react-rating";

const ReveiwCard = () => {
  const images = ["reveiw1", "reveiw2", "reveiw3"];
  const image = [1, 2, 3]
  return (
    <div className="flex ">
      <div className="hidden md:block h-full w-[4px] bg-gradient-to-b from-[#D9D9D9] to-[#3691D8]" />

      <div className="text-center flex flex-col items-center  text-white ">
        <div className="hidden md:flex justify-center items-center space-x-2 pb-4  ">


          <Rating
            readOnly
            value={4}
            style={{
              width: "40%",
            }}
          />

          <span href="" className="  text-[24px]  ">
            4.9
          </span>

        </div>
        <div className="flex justify-center items-center md:hidden space-x-2 pb-2 md:pb-0  ">


          <Rating
            readOnly
            value={4}
            style={{
              width: "30%",
            }}
          />

          <span href="" className="  text-[26px] md:text-[20px]  ">
            4.9
          </span>

        </div>
        <div className="flex justify-center -space-x-2">
          {images.map((img, index) => (
            <ReveiwIcon image={img} key={index} />
          ))}
        </div>
        <h1 className="xl:text-[40px] text-[26px] md:text-[30px] font-bold  pt-2 ">500M + </h1>
        <span className="xl:text-[22px] text-[24px]   md:text-[20px] "> Student Reveiws</span>
      </div>
    </div>
  );
};

export default ReveiwCard;

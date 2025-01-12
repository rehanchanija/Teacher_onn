import Link from "next/link";
import ReveiwIcon from "../Atoms/ReveiwIcon";

const ReveiwCard = () => {
  const images = ["reveiw1", "reveiw2", "reveiw3"];
  const image = [1, 2, 3]
  return (
    <div className="border-l-2 border-r-2 md:border-r-0 m-4 border-[#D9D9D9] bg-gradient-to-b from-custom-gray to-custom-blue p-6 md:p-2">
      <div className="w-[167px]  text-white mx-6 ">
        <span className="flex space-x-2 ">
          <Link href="" className="pr-2  text-[22px] pb-4  ">
            4.9  <span className="text-[#F8A401] text-2xl">★★★★☆</span>
          </Link>


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

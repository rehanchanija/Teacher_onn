import Image from "next/image";
import Link from "next/link";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const FeauturedCard = ({ tutor }) => {
  const { personalInfo } = tutor;

  return (
    <div className="sm:mx-3   mx-auto bg-white shadow-2xl rounded-lg ">
      <div className="">
        <Image
          src="/image/home/cards.png"
          width={294}
          height={296}
          alt="Featured Tutor"
          className=" w-full h-auto "
        />
      </div>
      <div className="bg-white space-y-2 px-6 pb-4 rounded-b-[10px]">
        <h1 className="text-[24px] font-bold pt-3">
          {personalInfo?.fullName}
        </h1>
        <p className="text-[18px] text-[#667681] pb-1">
          {personalInfo?.speciality}
        </p>
        <div className="flex pb-4 items-center">
          <Rating
            readOnly
            value={tutor?.rating}
            style={{
              width: "45%",
            }}
          />
          <Link href="" className="pl-2 text-[18px] text-[#146DB2]">
            799 Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeauturedCard;
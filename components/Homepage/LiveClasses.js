import Image from "next/image";
import Link from "next/link";
import LiveClassesCard from "../Cards/LiveClassesCard";
import { getExperienceTutor } from "@/api/tutor.api";
import { useQuery } from "@tanstack/react-query";

const LiveClasses = () => {
  const { data } = useQuery({
    querykey: ["GET_EXPERIENCE_TUTOR"],
    queryFn: getExperienceTutor,
  })
  console.log(data, "data")

  return (
    <div className="bg-white">

      <div className=" max-w-6xl mx-auto  ">
        <div className="flex items-center  md:px-2 ">
          <div className="pb-14 md:block hidden">
            <Image
              src="/image/home/live1.png"
              width={191.37}
              height={136.59}
              alt="a"
            />
          </div>
          <div className=" pb-6 md:w-[46.3rem] text-center mx-auto ">
            <Link href="" className="text-[#1BADFF]  text-[18px]">
              ~ LIVE CLASSES ~
            </Link>
            <h1 className="xl:text-[50px] md:text-[40px] text-[30px] px-2  md:px-0  pb-4  font-bold xl:leading-[63.1px] text-[#0F283C]">
              Experience <span className="text-[#146DB2] xl:pl-3">Directional Classes</span>
            </h1>
            <p className="text-[#667681] px-4 text-[14px] md:text-[20px] ">
              Established with a vision to provide high-quality and accessible
              education, our platform is designed to cater to the diverse learning
              needs of students..
            </p>
          </div>
          <div className="pb-14  hidden md:block">
            <Image
              src="/image/home/live2.png"
              width={191.37}
              height={136.59}
              alt="a"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3  ">
          {data?.map?.((tutor, index) => (
            <LiveClassesCard key={index} tutor={tutor} />
          ))}
        </div>
      </div>
    </div>

  );
};

export default LiveClasses;

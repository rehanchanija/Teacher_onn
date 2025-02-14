import Call from "@/assets/icons/Call";
import EmailIcon from "@/assets/icons/Email";
import Location from "@/assets/icons/Location";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const Learning = [
    "IBDP",
    "AS & A LEVEL",
    "IGCSE",
    "ICSE",
    "Mulund",

    "Bhandup",
    "Powai",
    "Edit Profile"
  ];
  const Topics = [
    "CHEMISTRY",
    "MATHS",
    "ENGLISH",
    "BIO",
    "ACCOUNTS",
    "BUSINESS     STUDIES",
    "Economics",
    "GEOGRAPHY class in Mumbai",
    "ENGLISH",
  ];
  return (
    <div className="bg-[#051B2C]">
      <div className=" md:flex justify-between  max-w-6xl mx-auto text-white md:px-12 py-12 px-4  ">
        <div className=" pt-2">
          <Image
            src="/image/footer/footer.png"
            width={240.18}
            height={61}
            alt="reload"
            className="pb-8"
          />
          <p className="pb-10 pt-4 md:w-[348px] text-[18px] ">
            Direction Classes is a commitment to academic excellence and
            holistic development. We strive to create an environment that
            fosters curiosity, critical thinking, and a passion for learning.
          </p>
          <Link href="" className="font-semibold text-[22px]">
            Follow us on Social Media:
          </Link>
          <Image
            src="/image/footer/socialmedia.png"
            width={156.07}
            height={31}
            alt="reload"
            className="pt-4 "
          />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:pl-4 pt-8 md:pt-0  ">
          <div className="  ">
            <h1 className=" font-semibold text-[22px] pb-5 ">Learning Path</h1>
            <ul className=" xl:text-[16px] text-[14px] list-inside ">
              {Learning.map((data, index) => (
                <li key={index} className="py-1.5 px-1 list-disc ">
                  <Link href={data === "Edit Profile" ? "/edit-profile" : ""}>{data}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="   ">
            <h1 className=" font-semibold text-[22px] pb-5 ">Topics</h1>
            <ul className=" xl:text-[16px] text-[14px] list-inside transition-all break-words ">
              {Topics.map((data, index) => (
                <li key={index} className="py-1.5 px-1 list-disc  ">
                  <Link href="" className="">
                    {data}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" text-[16px] pl-4 pt-6 md:pt-0 ">
            <h1 className=" font-semibold text-[22px] pb-5">Get In Touch</h1>
            <div className="flex pb-2 ">
              <Location />
              <ul className="pl-4 text-[16px] ">
                <li className="text-[#1BADFF]">Address:</li>
                <li> Direction Classes</li>
                <li /> UG -10, Avior corporate park Lbs road <li />
                <li>Mulund West , 400078</li>
              </ul>
            </div>

            <div className="flex py-4">
              <Call />
              <div className="pl-4 ">
                <h1 className="text-[#1BADFF]">Call Us:</h1>
                <span> +91 99877 58132</span>
              </div>
            </div>
            <div className="flex pt-4">
              <EmailIcon />
              <div className="pl-4 ">
                <h1 className="text-[#1BADFF]">Email Us:</h1>
                <span> +91 99877 58132</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#146DB2] text-white text-center py-2">
        <h1>
          Copyright © 2024{" "}
          <span className="font-semibold">Direction Classes</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;

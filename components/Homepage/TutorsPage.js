import FingerIcon from "@/assets/icons/FingerIcon";

const TutorsPage = () => {
  return (
    <div className="bg-[#146DB2]    ">
      <div className=" md:px-1 pt-6 w-">
        <div className=" leading-[73px]  md:text-[60px] text-[30px]  text-white py-4 ">
          <h1 className="   ">Join Live Online or</h1>
          <span className=" font-semibold ">
            Offline Classes with the
            <h2 className="text-[#1BADFF] flex font-semibold">
              Best Tutors
              <FingerIcon />
            </h2>
          </span>
        </div>
        <p className="text-white  md:text-[20px]  w-[604px]  ">
          At Direction Classes, we believe in empowering students through
          education and guiding them toward a successful future.
        </p>
      </div>
    </div>
  );
};

export default TutorsPage;

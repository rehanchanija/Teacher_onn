import ReveiwCard from "../Cards/ReveiwCard";

const Reveiw = () => {
  const combos = [1, 2, 3];

  return (
    <div className="bg-[#146DB2] md:flex md:px-6 md:py-12 pb-4   ">
      <div className=" w-[410px] h-[189px] px-4  pt-8">
        <p className="text-[3.1rem] font-black leading-[63.1px] text-white    ">
          Over <span> 500 Plus </span>
          <span className="text-[#1BADFF] pr-3">Course!</span>
          <span>in One Place <span className="">______</span></span>
        </p>
      </div>
      <div className="flex flex-wrap md:pt-0 mx-4 md:mx-0 pt-12 px-5 md:px-0">
        {combos.map((product, index) => (
          <ReveiwCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reveiw;

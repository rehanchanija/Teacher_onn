import ReveiwCard from "../Cards/ReveiwCard";

const Reveiw = () => {
  const combos = [1, 2, 3];

  return (
    <div className="bg-[#146DB2]  ">

      <div className="md:flex  justify-between md:px-6 md:py-12  py-6 max-w-6xl mx-auto ">
        <div className="md:pr-3 pl-5 pr-2 md:pl-0   xl:pt-6 pt-4 text-center  md:text-left ">
          <p className="xl:text-[50px]  text-[30px] md:text-[40px] font-bold md:leading-[46.1px] xl:leading-[63.1px]  md:w-[20rem] xl:w-[24rem] text-white    ">
            Over <span className="font-bold"> 500 Plus </span>
            <span className="text-[#1BADFF] font-bold md:pr-3">Course!</span><br className="md: hidden " />
            <span>in One <br className="hidden md:block" /> Place
              <span className="">   ______</span>
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 pt-8 md:pt-0 ">
          {combos.map((product, index) => (
            <ReveiwCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reveiw;

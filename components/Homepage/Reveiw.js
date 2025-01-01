import ReveiwCard from "../Cards/ReveiwCard";

const Reveiw = () => {
  const combos = [1, 2, 3];

  return (
    <div className="bg-[#146DB2] flex  py-12  my-24">
      <div className=" w-[410px] h-[189px] px-2 pt-2">
        <p className="text-[3.1rem] font-black leading-[63.1px] text-white    ">
          Over <span> 500 Plus </span>
          <span className="text-[#1BADFF] pr-3">Course!</span>
          <span>in One Place</span>
        </p>
      </div>
      <div className="flex">
        {combos.map((product, index) => (
          <ReveiwCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Reveiw;

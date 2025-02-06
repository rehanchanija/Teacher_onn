const TutorsCard = ({ bgColor }) => {
  return (
    <div className={` text-[#01354B] p-4 ${bgColor} space-y-4 rounded-md  `}>
      <h1 className="text-[20px] font-semibold pt-3">
        Online Vedic Maths, Vedic Mathematics tutor required
      </h1>
      <div className="space-x-6">
        <button className="border px-2 border-[#01354B]">Vedic Maths</button>
        <button className="border px-2 border-[#01354B]">Vedic Mathematics</button>
      </div>
      <p className="text-[16px]">I am looking for a Vedic Maths Teacher.</p>
      <div className="text-[#136FB6] pb-6 space-x-3">
        <span>4 mins ago</span>
        <span>Thane, Maharashtra, India</span>
      </div>
      <button className="text-[#136FB6] text-[17.36px] border border-[#136FB6] w-full py-2 font-bold">
        View Details
      </button>
    </div>
  );
};

export default TutorsCard;
const TeacherListCard = () => {
  return (
    <div className="w-[410px] text-[#01354B] p-4 bg-[#EFF7FC] space-y-4 rounded-md ">
      <h1 className="text-[20px] font-semibold pt-3">
        Omar khalid{" "}
        <span className="text-[16px] text-[#1BADFF]">
          {" "}
          (Mechatronics Engineer)
        </span>
      </h1>
      <div className="space-x-6">
        <button className="border px-2 border-[#01354B]">Vedic Maths</button>
        <button className="border px-2  border-[#01354B]">
          Vedic Mathematics
        </button>
      </div>
      <p className="text-[16px] text-[#667681]">
        I am a Mechatronics Engineer from Cairo University who graduated with a
        grade equivalent to Very Good.
      </p>
      <p className="text-[16px] text-[#667681]">
        I am a Mechatronics Engineer from Cairo University who graduated with a
        grade equivalent to Very Good.
      </p>

      <div className="text-[#136FB6] pb-6 space-x-3">
        <span>4 mins ago</span>
        <span>Thane,,India</span>
        <span>Thane,,India</span>
      </div>
      <button className="text-[#136FB6] text-[17.36px]  border border-[#136FB6] w-full py-2 font-bold">
        {" "}
        Contatc me
      </button>
    </div>
  );
};

export default TeacherListCard;

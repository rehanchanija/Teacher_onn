import Link from "next/link";

const TeachingCard = () => {
  const buttons = ["Teacher", "Online Teacher", "Home Teacher", "Assignment Help"];

  return (
    <div className="md:w-[617px] bg-[#9DDDAB] rounded-xl font-semibold px-8 py-6 items-center md:mx-4 mt-6">
      <h1 className="md:text-[50px] font-extrabold text-[#0F283C] text-[30px] pb-6 pt-2">
        Teaching Jobs
      </h1>
      <div className="space-y-4 md:text-[22px] md:font-medium pb-5">
        {buttons.map((item, index) => (
          <div
            key={index}
            className="flex justify-between rounded-xl bg-white px-8 py-3 items-center hover:shadow-lg transition-all"
          >
            <h1 className="md:text-lg font-semibold">{item}</h1>
            <button className="bg-[#72B482] text-xl md:text-2xl text-white px-4 py-3 rounded-full font-bold">
              <Link href={`/jobs/${item.toLowerCase().replace(" ", "-")}`}>
                ➝
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachingCard;

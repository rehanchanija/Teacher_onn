"use client";
import { useState, useMemo } from "react";
import TutorsCard from "../Cards/TutorsCard";
import TutorHome from "./TutorHome";

const TutorsJob = () => {
  const bgColors = ["bg-[#E1F6CC]", "bg-[#E9EBF8]", "bg-[#E6F1FF]"];

  // Total cards from API or any source
  const totalCards = 30; // API se jo total cards aaye
  const cardsPerPage = 9; // Har page mein 9 cards

  const totalPages = Math.ceil(totalCards / cardsPerPage); // Total pages calculate based on cards per page

  const [currentPage, setCurrentPage] = useState(1);

  // Dummy cards array
  const combos = Array.from({ length: totalCards }, (_, i) => i + 1);

  // Cards to display for the current page
  const getCardsForPage = (page) => {
    const startIndex = (page - 1) * cardsPerPage;
    return combos.slice(startIndex, startIndex + cardsPerPage);
  };

  const currentCards = useMemo(
    () => getCardsForPage(currentPage),
    [currentPage]
  );

  // Pagination controls
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="  max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-white text-center pt-10 pb-28 bg-[#146DB2] ">
        <h1 className="xl:text-[60px] md:tex-[40px] text-[30px] font-bold">
          TUTORS JOBS
        </h1>
        <p className="text-20px pb-4">Get the right job you deserve</p>
      </div>
      <TutorHome />
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 pt-40 md:pt-24">
        {currentCards.map((combo, index) => (
          <TutorsCard key={combo} bgColor={bgColors[index % bgColors.length]} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-3 py-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          ← Prev
        </button>

        {/* Display only 5 page numbers */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${
                currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default TutorsJob;

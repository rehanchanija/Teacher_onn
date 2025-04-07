"use client";
import { useState, useMemo } from "react";
import TeacherListCard from "@/components/Cards/TutorListCard";
import { useQuery } from "@tanstack/react-query";
import { getAllTutor, getTutor } from "@/api/tutor.api";
import Loader from "@/components/Loader";
import { useRouter } from "next/router";

const TeacherList = () => {
    const router=useRouter();
    const level=router.query?.level;
    console.log(router.query);
    const { data, isLoading } = useQuery({
        queryKey: ["GET-ALL-TUTOR",level],
        refetchOnWindowFocus: false,
        queryFn: getAllTutor,
    })
    
    const totalCards = data?.length || 0;
    const cardsPerPage = 9;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    // Get current cards for the page
    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        return data?.slice(startIndex, endIndex) || [];
    };

    const currentCards = useMemo(() => getCurrentPageData(), [currentPage, data]);

    // Pagination controls
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="max-w-6xl mx-auto">
            {isLoading && <Loader />}
            <div className='text-white text-center pt-10 pb-14 bg-[#146DB2]'>
                <h1 className='xl:text-[60px] md:tex-[40px] text-[30px] font-bold'>TEACHER LIST</h1>
                <p className='text-20px pb-4'>Get the right job you deserve</p>
            </div>
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 pt-16">
                {currentCards?.map?.((tutor, index) => (
                    <TeacherListCard  key={tutor._id || index} tutor={tutor} level={level}/>
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

                {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;
                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"}`}
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

export default TeacherList;

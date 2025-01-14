"use client";
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

// Styled Components for Checkbox
const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxLabel = styled.label`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  color: #687682;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #1E1E1E;
    border-radius: 4px;
    background-color: transparent;
    transition: all 0.3s ease;
  }

  /* Change the style when checkbox is checked */
  ${CheckboxInput}:checked + &::before {
    background-color: #1E1E1E;
    border-color: #1E1E1E;
  }

  /* Display check mark when checked */
  ${CheckboxInput}:checked + &::after {
    content: '\\2713'; /* Unicode check mark */
    position: absolute;
    left: 4px;
    top: -2px;
    color: white;
    font-size: 16px;
  }
  
`;

const Filter = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [priceRange, setPriceRange] = useState([10, 80]);

    const books = [
        { title: 'Bad Habits', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
        { title: 'Payback and Discounted', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
        { title: 'Demand - Economics Notes', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
        { title: 'Bad Habits', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
        { title: 'Payback and Discounted', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
        { title: 'Demand - Economics Notes', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
        { title: 'Bad Habits', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
        { title: 'Payback and Discounted', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
        { title: 'Demand - Economics Notes', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
        { title: 'Bad Habits', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
        { title: 'Payback and Discounted', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
        { title: 'Demand - Economics Notes', price: 282, originalPrice: 500, rating: 4.5, bullets: ['Beginner | Intermediate | Expert | Adult/Casual learning', 'Activity | Music'] },
    ];

    // Pagination States
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Logic for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(books.length / itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };





    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center font-gilroy">




            {/* Store Content */}
            <div className=" mx-auto p-4 mt-8">
                <div className="flex ">

                    {/* Main Content */}
                    <div className="w-[1000px] max-w ml-1">
                        {/* Grid layout for cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            {currentBooks.map((book, index) => {
                                const mrp = 500;  // Setting MRP as $500 for now
                                const price = book.price || mrp; // Using book price if available, otherwise MRP
                                const discountPercentage = ((mrp - price) / mrp) * 100; // Calculate discount percent
                                const calculatedDiscountPercentage = discountPercentage.toFixed(0); // Round to 0 decimal points
                                const rating = book.rating || 5; // Example rating out of 5

                                return (
                                    <div
                                        key={index}
                                        className="bg-[#D9E8F3] shadow-lg rounded-lg p-4 flex flex-col min-h-[472px] w-full w-[323px]" // Set min height and flexible width
                                    >
                                        {/* Title Image */}
                                        <Image
                                            src="/Rectangle 251.png"
                                            alt="Title Image"
                                            width={300}
                                            height={180}
                                            className="rounded-t-md object-cover mb-4"
                                        />

                                        {/* Book Title */}
                                        <h3 className="text-black font-bold text-lg mb-2">{book.title}</h3>

                                        {/* Author and Review Section */}
                                        <div className="flex items-center mb-4">
                                            {/* Author Name */}
                                            <span className="bg-[#1BADFF] text-white text-[16px] px-2 py-1 mr-2">
                                                By VIJAY ANAND
                                            </span>

                                            {/* Rating Stars */}
                                            <div className="flex items-center ml-2 mr-1">
                                                {Array.from({ length: rating }, (_, i) => (
                                                    <Image
                                                        key={i}
                                                        src="/start.png" // Replace with your star image path
                                                        alt="Star"
                                                        width={18}
                                                        height={17}
                                                        className="mr-1"
                                                    />
                                                ))}
                                            </div>

                                            {/* Review Count */}
                                            <span className="text-[#667681] text-[16px]">(79)</span>
                                        </div>

                                        {/* Bullet points */}
                                        <ul className="text-[#136EB4] text-base list-disc pl-5 mb-4">
                                            {book.bullets && book.bullets.map((bullet, idx) => (
                                                <li key={idx} className="font-Gilroy">{bullet}</li>
                                            ))}
                                        </ul>

                                        {/* Price and MRP */}
                                        <div className="flex items-center mb-4">
                                            <p className="text-black text-2xl font-bold mr-2">${price}</p>
                                            <p className="text-[#62717B] text-base line-through mr-2">${mrp}</p>
                                            <p className="text-[#FF281B] text-base">({calculatedDiscountPercentage}%)</p>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button className="mt-auto bg-transparent border border-[#136EB4] text-[#136EB4] text-sm font-bold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-[#136EB4] hover:text-white">
                                            <Image
                                                src="/Group 487.png"
                                                alt="Cart Icon"
                                                width={22}
                                                height={22}
                                                className="mr-2"
                                            />
                                            Add to Cart
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex justify-center items-center mt-6">
                            {/* Previous Button */}
                            <button
                                onClick={() => {
                                    goToPreviousPage();
                                    setActivePage((prev) => (prev > 1 ? prev - 1 : prev)); // Adjust active page
                                }}
                                disabled={currentPage === 1}
                                className={`mx-2 w-[64px] h-[64px] border-[1px] border-[#BCBCBC] bg-white rounded-lg flex items-center justify-center text-[#BCBCBC] text-[18px] font-gilroy disabled:border-gray-300 disabled:text-gray-300 hover:border-[#146BAE] hover:text-[#146BAE] ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
                            >
                                {"<"}
                            </button>

                            {/* Page Numbers */}
                            <div className="flex mx-2">
                                {Array.from({ length: totalPages }, (_, index) => {
                                    const page = index + 1;
                                    return (
                                        <button
                                            key={page}
                                            onClick={() => setActivePage(page)}  // Set active page when clicked
                                            className={`w-[64px] h-[64px] border-[1px] rounded-lg flex items-center justify-center text-[18px] font-gilroy mx-2 ${currentPage === page
                                                ? "bg-[#146BAE] text-white border-[#146BAE]"  // Active page style
                                                : "bg-white text-[#BCBCBC] border-[#BCBCBC]"  // Inactive page style
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={() => {
                                    goToNextPage();
                                    setActivePage((prev) => (prev < totalPages ? prev + 1 : prev)); // Adjust active page
                                }}
                                disabled={currentPage === totalPages}
                                className={`mx-2 w-[64px] h-[64px] border-[1px] border-[#BCBCBC] bg-white rounded-lg flex items-center justify-center text-[#BCBCBC] text-[18px] font-gilroy disabled:border-gray-300 disabled:text-gray-300 hover:border-[#146BAE] hover:text-[#146BAE] ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
                            >
                                {">"}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

<style jsx>{`
  .range-input {
      -webkit-appearance: none;
      width: 238px; /* Fixed width for the range bar */
      height: 3px; /* Thickness of the bar */
      background-color: #ddd; /* Light grey background for the range bar */
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
      position: relative;
      z-index: 1;
    }

    /* Style for Webkit browsers (Chrome, Safari, Edge) */
    .range-input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 22px; /* Set thumb size to 22px */
      height: 22px; /* Set thumb size to 22px */
      background-color: #B7CEDB; /* Thumb color */
      border-radius: 50%; /* Circular thumb */
      cursor: pointer;
      z-index: 2;
      margin-top: -8px; /* Centers the thumb vertically on the track */
    }

    /* Style for Firefox */
    .range-input::-moz-range-thumb {
      width: 22px; /* Set thumb size to 22px */
      height: 22px; /* Set thumb size to 22px */
      background-color: #B7CEDB; /* Thumb color */
      border-radius: 50%; /* Circular thumb */
      cursor: pointer;
      z-index: 2;
      margin-top: -8px; /* Centers the thumb vertically on the track */
    }

    /* Style for Internet Explorer */
    .range-input::-ms-thumb {
      width: 22px; /* Set thumb size to 22px */
      height: 22px; /* Set thumb size to 22px */
      background-color: #B7CEDB; /* Thumb color */
      border-radius: 50%; /* Circular thumb */
      cursor: pointer;
      z-index: 2;
    }

    /* Track styling */
    .range-input:focus {
      outline: none; /* Remove focus outline */
    }

    .range-input::-webkit-slider-runnable-track {
      height: 3px;
      background-color: #B7CEDB; /* Track color */
    }

    .range-input::-moz-range-track {
      height: 3px;
      background-color: #B7CEDB; /* Track color */
    }

    .range-input::-ms-track {
      height: 3px;
      background-color: #B7CEDB; /* Track color */
      border-color: transparent;
      border-width: 10px 0;
      color: transparent;
      background-color: transparent;
      /* Required for proper rendering in IE */
    }
  `}</style>

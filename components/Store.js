import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Store = () => {
    const [priceRange, setPriceRange] = useState([0, 60]);
    const [expandedSections, setExpandedSections] = useState({
        subject: true,
        grade: false,
        stock: false,
        price: false,
        types: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const subjects = [
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum",
        "Lorem Ipsum"
    ];

    return (
        <div>
            {/* Left Section */}
            {/* Header Section */}
            <div
                className="relative bg-[#136FB6] text-white w-full text-center py-4 flex flex-col items-center justify-center"
                style={{ height: '368px' }}
            >
                <h1 className="font-bold text-[40px] md:text-[60px] leading-none text-center">BROWSE OUR STORE</h1>
                <p className="text-[16px] md:text-[20px] text-center mt-2 leading-[30px]">Teaching and learning resources</p>
            </div>
            {/* Navigation Bar */}
            <div
                className="relative bg-[#0F283C] mx-10 text-white max-w-7xl h-[117px] mt-[-58px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center items-center px-4 sm:px-8"
                style={{ top: '-20px' }}
            >
                <div className="flex items-center bg-[#D9D9D9] rounded-md w-[940px] h-[56px]">
                    <select className="bg-transparent px-4 py-2 text-black focus:outline-none">
                        <option>Books</option>
                        <option>Stationery</option>
                        <option>Courses</option>
                    </select>

                    <Image src="/Line 4.png" alt="Separator" width={1} height={40} className="mx-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-grow bg-transparent px-4 py-2 text-black focus:outline-none"
                    />
                    <Image src="/clear.png" alt="Clear" width={32} height={32} className="mr-4 cursor-pointer" />
                    <Image src="/Line 4.png" alt="Separator" width={1} height={40} className="mx-2" />
                    <Image src="/search.png" alt="Search" width={32} height={32} className="mr-4 cursor-pointer" />
                </div>
                <button className="ml-4 w-[179px] h-[56px] bg-[#009EF7] text-white rounded-md flex items-center justify-center">
                    <Image src="/vector.png" alt="Button Icon" width={21} height={21} className="mr-2" />
                    <span className="font-bold">Search</span>
                </button>
            </div>

            {/* Right Section */}
            <div className="w-64 bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                {/* Subject Section */}
                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('subject')}
                        className="flex justify-between items-center w-full py-2 text-left font-medium"
                    >
                        Subject
                        {expandedSections.subject ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {expandedSections.subject && (
                        <div className="mt-2 space-y-2">
                            {subjects.map((subject, index) => (
                                <label key={index} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={true} // Consider controlled state for checkboxes
                                        onChange={() => { }}
                                        className="w-4 h-4 rounded border-gray-300"
                                    />
                                    <span className="text-sm">{subject}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Grade & Level Section */}
                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('grade')}
                        className="flex justify-between items-center w-full py-2 text-left font-medium"
                    >
                        Grade & Level
                        {expandedSections.grade ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {expandedSections.grade && (
                        <div className="mt-2 space-y-2">
                            {/* Add content here */}
                            <span className="text-sm">Select Grade</span>
                        </div>
                    )}
                </div>

                {/* Stock Status Section */}
                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('stock')}
                        className="flex justify-between items-center w-full py-2 text-left font-medium"
                    >
                        Stock Status
                        {expandedSections.stock ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {expandedSections.stock && (
                        <div className="mt-2 space-y-2">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-gray-300"
                                />
                                <span className="text-sm">In Stock</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-gray-300"
                                />
                                <span className="text-sm">Out of Stock</span>
                            </label>
                        </div>
                    )}
                </div>

                {/* Price Range Section */}
                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('price')}
                        className="flex justify-between items-center w-full py-2 text-left font-medium"
                    >
                        Price Range
                        {expandedSections.price ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {expandedSections.price && (
                        <div className="mt-4 px-2">
                            <input
                                type="range"
                                min="0"
                                max="60"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} // Update both values
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between mt-2">
                                <span className="text-sm">${priceRange[0]}</span>
                                <span className="text-sm">${priceRange[1]}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Types Section */}
                <div className="mb-4">
                    <button
                        onClick={() => toggleSection('types')}
                        className="flex justify-between items-center w-full py-2 text-left font-medium"
                    >
                        Types
                        {expandedSections.types ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {expandedSections.types && (
                        <div className="mt-2 space-y-2">
                            {/* Add content here */}
                            <span className="text-sm">Select Types</span>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Store;

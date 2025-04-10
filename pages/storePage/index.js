import StoreCard from "@/components/Cards/StoreCard";
import React from "react";
import { FaFilter } from "react-icons/fa";

const StorePage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 p-6">
                {/* Right Side Filter */}
                <aside className="col-span-3 bg-white rounded-2xl p-4 shadow-md h-fit sticky top-4">
                    <div className="flex items-center space-x-2 mb-4">
                        <FaFilter className="text-blue-600" />
                        <h2 className="text-xl font-semibold">Filters</h2>
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                        <h3 className="font-medium mb-2">Subject</h3>
                        <div className="space-y-1">
                            {[1, 2, 3, 4].map((i) => (
                                <label key={i} className="flex items-center space-x-2">
                                    <input type="checkbox" defaultChecked className="accent-blue-500" />
                                    <span>Lorem Ipsum</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Grade & Level */}
                    <div className="mb-4">
                        <h3 className="font-medium mb-2">Grade & Level</h3>
                        <select className="w-full p-2 border rounded-lg">
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Expert</option>
                        </select>
                    </div>

                    {/* Stock Status */}
                    <div className="mb-4">
                        <h3 className="font-medium mb-2">Stock Status</h3>
                        <label className="flex items-center space-x-2 mb-1">
                            <input type="checkbox" className="accent-blue-500" />
                            <span>In Stock</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="accent-blue-500" />
                            <span>Out of Stock</span>
                        </label>
                    </div>

                    {/* Price Range */}
                    <div className="mb-4">
                        <h3 className="font-medium mb-2">Price Range</h3>
                        <input type="range" min="10" max="80" className="w-full" />
                    </div>

                    {/* Types */}
                    <div>
                        <h3 className="font-medium mb-2">Types</h3>
                        <select className="w-full p-2 border rounded-lg">
                            <option>Activity</option>
                            <option>Music</option>
                        </select>
                    </div>
                </aside>

                {/* Left Side Cards */}
                <main className="col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <StoreCard key={i} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default StorePage;

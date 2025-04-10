'use client';

import { FaShoppingCart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Image from 'next/image';

const StoreCard = () => {
  return (
    <div className="max-w-xs rounded-xl shadow-lg border border-gray-200 p-4 bg-white hover:shadow-xl transition-all">
      <Image
        src="/book.png"
        width={300}
        height={160}
        alt="book"
        className="w-full h-40 object-cover rounded-lg"
      />

      <div className="mt-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">Bad Habits</h2>

        <div className="flex items-center gap-2">
          <span className="text-sm text-[#136EB4] font-medium">By VIJAY ANAND</span>
          <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
          <span className="text-sm text-gray-500">(79)</span>
        </div>

        <div className="text-xs text-[#136EB4] flex flex-wrap gap-x-2">
          <span>Beginner</span> |
          <span>Intermediate</span> |
          <span>Expert</span> |
          <span>Adult/Casual learning</span>
        </div>

        <div className="text-xs text-[#136EB4] flex gap-3">
          <span>Activity</span>
          <span>Music</span>
        </div>

        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-lg font-semibold text-gray-800">₹282</span>
          <span className="text-sm line-through text-gray-400">₹500</span>
          <span className="text-sm text-red-500">(-43%)</span>
        </div>

        <button className="w-full flex items-center justify-center gap-2 mt-3 py-2 px-4 text-sm font-medium text-[#136EB4] border border-[#136EB4] rounded-lg hover:bg-[#136EB4] hover:text-white transition">
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default StoreCard;

import React from 'react';
import Image from 'next/image';
import RatingIcon from '@/assets/icons/RatingIcon';

const TestimonialsCard = ({ imageSrc, name, email }) => {
  return (
    <div className="bg-[#FFFFFF] shadow-xl shadow-[#E5ECF2]   border space-y-2 border-blue-100 p-4 w-[384px]   rounded-lg ">
     
     <div className='flex justify-between'>
      
       <Image
        src="/image/home/textomonialscard.png"
        alt={name}
        width={118}
        height={80}  
        className=""
        />
        <div>

    <RatingIcon/>
        </div>
        </div>
      <h2 className="text-[20px] font-semibold  ">ARYA GUPTA</h2>
      <p className="text-[#667681]  text-[16px]">“The coaching classes were crucial to my academic success. The professors emphasized critical analysis and effective answering techniques, while the DC test papers deepened my understanding. Nikita mam’s innovative teaching strategies and practical tips greatly enhanced my performance.</p>
    </div>
  );
};

export default TestimonialsCard;
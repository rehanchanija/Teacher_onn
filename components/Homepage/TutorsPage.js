"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import SignupModal from '../signupModel';
import SigninModal from '../signinModel';

const TutorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [LoginModelOpen, setLoginModelOpen] = useState(false);
  const [defaultRole, setDefaultRole] = useState('student');

  const openModal = (role) => {
    setDefaultRole(role);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const openLoginModal = () => {
    setLoginModelOpen(true);
  };
  const closeLoginModal = () => setLoginModelOpen(false);

  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeLoginModal();
      }
    };

    if (isModalOpen || LoginModelOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isModalOpen, LoginModelOpen]);

  return (
    <div className=" max-w-full pb-24 px-12  bg-[#136FB6] font-gilroy ">
      {/* Background section remains fixed */}

      <div className="flex flex-col-reverse md:flex-row   items-center justify-between max-w-6xl mx-auto">
        {/* Left section (Text below on small screens) */}
        <div className="text-center md:text-left text-white sm:max-w-[80%] md:max-w-[600px] py-12 md:py-8 
        pr-4 sm:pr-8">
          <h1 className="text-[30px] mt-8 md:mt-0 md:text-[40px]  xl:text-[60px] font-gilroy leading-tight">
            Join Live Online Or
          </h1>
          <p className="text-[30px] md:text-[40px] xl:text-[60px] font-bold">
            <span className="border-b-3 sm:border-b-4 border-[#1BADFF]">Offline</span> Classes with
          </p>
          <p className="text-[30px] font-bold md:text-[40px] xl:text-[60px] ">
            The <span className="text-[#1BADFF]">Best Tutors</span>
          </p>
          <p className="text-white text-[14px]  md:text-[20px] text xl:text-[20px] mt-4 md:mt-8">
            At Direction Classes, we believe in empowering students through education and guiding them toward a successful future.
          </p>
          <div className="flex flex-col font-medium sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8">
            <button
              onClick={() => openModal('student')}
              className="bg-white text-[#1268AA] text-[14px]  md:text-[17px] w-full md:w-[160px] h-[40px] md:h-[52px] rounded-[4px]"
            >
              Join as a Student
            </button>
            <button
              onClick={() => openModal('tutor')}
              className="bg-[#1BADFF] text-white text-[14px]  md:text-[17px] w-full  md:w-[160px] h-[40px] md:h-[52px] rounded-[4px]"
            >
              Join as a Tutor
            </button>
          </div>
        </div>

        {/* Right section (Image on top on small screens) */}
        <div className="relative mt-6 md:mt-0">
          <Image
            src="/image/home/tutorpage.png"
            alt="Top Right Image"
            width={465}
            height={684}
            className="w-[300px] sm:w-[400px] md:w-[465px] h-auto mx-auto"
          />
        </div>
      </div>

      {/* Down card */}



      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        preventScroll={true}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.8)",
            justifyContent: "center",
            alignContent: "center",
          },
          content: {
            height: "auto",
            zIndex: 1000,
            padding: 0,
            margin: "auto",
            position: "static",
            maxHeight: "90vh",
            borderRadius: "20px",
          },
        }}
      >
        <SignupModal isOpen={isModalOpen} closeModal={closeModal} defaultRole={defaultRole} />
      </ReactModal>
    </div>
  );
};

export default TutorsPage;

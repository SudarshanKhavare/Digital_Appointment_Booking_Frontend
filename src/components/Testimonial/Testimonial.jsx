/* eslint-disable no-unused-vars */
import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Sudarshan Khavare
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              ⏰ "This service saved me so much time; I could quickly find
              available slots and book my appointment without any hassle; The
              reminders were extremely helpful, ensuring I never missed an
              appointment!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Akshay Yadav
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              ⭐ "The digital appointment booking website was so easy to use and
              made scheduling my healthcare visits a breeze! I could find a slot
              within minutes, and the whole process was seamless.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Om Sapkal
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              🩺 "I loved the convenience of booking my appointment online and
              receiving instant confirmations and reminders. It took away the
              hassle of phone calls and long wait times. The interface is
              intuitive and user-friendly!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Omkar Mane
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                  <HiStar className="text-yellowColor w-[18px] h-5 " />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              🏥 "I had a wonderful experience using the digital booking system.
              The process was quick and efficient, allowing me to secure a
              convenient time slot easily. The automated reminders were a great
              touch!"
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;

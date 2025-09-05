import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slide3 from '../../../public/slide3.jpg'
import slide2 from '../../../public/slide22.jpg'

const BannerSlider = () => {
  return (
    <div className="w-full h-[350px] md:h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="Plant Care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl md:text-4xl poppins font-bold">Watering Tips</h2>
              <p className="mt-2 inter">Keep soil moist but not soggy 🌱</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={slide2}
              alt="Plant Variety"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl poppins md:text-4xl font-bold">Indoor Plants</h2>
              <p className="mt-2 inter">Perfect plants for your living room 🌿</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src={slide3}
              alt="Plant Care Tips"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl poppins md:text-4xl font-bold">Sunlight Needs</h2>
              <p className="mt-2 inter">Place your plants near indirect sunlight ☀️</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;

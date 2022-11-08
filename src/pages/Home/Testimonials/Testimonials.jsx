import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <div>
      <div className="flex flex-col w-full lg:w-1/2 mx-auto mb-6">
        <h3 className="text-xl lg:text-3xl font-bold text-purple-600 text-center uppercase">
          Programming Quote
        </h3>
        <p className="text-center text-gray-700 font-semibold">
          Listen to a tour guide on a shuttle bus from the airport to the
          resort. You can listen first, and then read. After that, test your
          understanding with the quick check.
        </p>
      </div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-gray-700">
                “Any fool can write code that a computer can understand. <br />{" "}
                Good programmers write code that humans can understand”
              </p>
              <img src="https://martinfowler.com/img/mf-cologne.jpg" alt="" />
              <h3 className="text-xl lg:text-2xl font-bold text-gray-700">
                Martin Flower
              </h3>
              <p className="text-sm capitalize">
                British software developer,
                <br /> author and international public speake
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-gray-700">
                “Truth can only be found in one place: the code”
              </p>
              <img
                src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/robert-martin.jpg"
                alt=""
              />
              <h3 className="text-xl lg:text-2xl font-bold text-gray-700">
                Robert C. Martin
              </h3>
              <p className="text-sm capitalize">
                American software engineer, <br /> instructor, and <br />{" "}
                best-selling author.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-gray-700">
                “The computer programmer is a creator of universes <br /> for
                which he alone is the lawgiver. <br /> No playwright, no stage
                director, no emperor, <br /> however powerful, has ever
                exercised such absolute authority <br /> to arrange a stage or
                field of battle <br /> and to command such unswervingly dutiful
                actors or troops”
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5EQChwURhX4s989ZrJxFg7_SVqrST65gAMw&usqp=CAU"
                alt=""
              />
              <h3 className="text-xl lg:text-2xl font-bold text-gray-700">
                Joseph Weizenbaum
              </h3>
              <p className="text-sm">
                British software developer,
                <br /> author and international public speake
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

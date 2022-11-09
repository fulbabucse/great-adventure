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
    <div className="my-4 lg:my-10">
      <div className="flex flex-col w-full lg:w-1/2 mx-auto mb-3">
        <h3 className="text-xl lg:text-3xl font-bold text-purple-600 text-center mb-2">
          Testimonials
          <p className="feature-underline"></p>
        </h3>
        <p className="text-center text-gray-700">
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
            <div className="flex flex-col items-center testimonials">
              <img
                className="h-10 w-10  rounded-full"
                src="https://scontent.fdac34-1.fna.fbcdn.net/v/t1.6435-9/74564203_790434564752263_52239055861055488_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEmj1D-zU6crdfMDr-V4OZutk-WvTolD2C2T5a9OiUPYA_2De8dh_d8Nh-_SQdCs7C4Rmfx4RooFw75OOpHpM6C&_nc_ohc=qLYkN2xPkOEAX_4e3X9&_nc_ht=scontent.fdac34-1.fna&oh=00_AfDaAhzDwGH1Vaa6yYcs79npUJFPUvFkonVRVIHE5GBmeQ&oe=6392D91A"
                alt=""
              />
              <p className="text-lg italic font-semibold text-gray-700">
                “What can we say?! We were just blown away by the <br />{" "}
                attention to detail and the flawless service”
              </p>
              <h3 className="text-sm font-bold text-gray-700">
                Fahim Islam, Bangladesh
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center testimonials">
              <img
                className="h-10 w-10  rounded-full"
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
              <p className="text-lg italic font-semibold text-gray-700">
                “By far our best vacation yet! It was so relaxing, <br /> we
                never wanted to leave”
              </p>
              <h3 className="text-sm font-bold text-gray-700">
                Farhan Ahmed, Bangladesh
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center testimonials">
              <img
                className="h-10 w-10  rounded-full"
                src="https://akns-images.eonline.com/eol_images/Entire_Site/20211022/rs_1200x1200-211122090451-1200-Jennifer-Lawrence.jpg"
                alt=""
              />
              <p className="text-lg italic font-semibold text-gray-700">
                “Jobs fill your pockets, adventures fill your soul”
              </p>
              <h3 className="text-sm font-bold text-gray-700">
                Jennifer Lawrence, USA
              </h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center testimonials">
              <img
                className="h-10 w-10  rounded-full"
                src="https://media.licdn.com/dms/image/C4D03AQFYhR9vwnFRCA/profile-displayphoto-shrink_800_800/0/1561738976219?e=1672876800&v=beta&t=lbeZ-5DjKA7_i6dPoG53hpeAEckgGM1i7GjiEuyXBdw"
                alt=""
              />
              <p className="text-lg italic font-semibold text-gray-700">
                “Some beautiful paths can’t be discovered without getting lost”
              </p>
              <h3 className="text-sm font-bold text-gray-700">
                Steve Jacob, Canada
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

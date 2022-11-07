import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mb-6">
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://images.unsplash.com/photo-1658383895221-173f07c6a9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="carousel-img"
                  alt="..."
                />
              </div>
              <div className="carousel-caption top-5 lg:top-40 md:block absolute space-y-3 w-3/5 lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">Sajek Valley</h5>
                <p className="text-xs lg:text-lg">
                  If you want to see the land of the cloud in Bangladesh then
                  you have to visit the queen of hills, Sajek Valley. Visiting
                  this place will fulfill your dream of walking through the
                  clouds.
                </p>
                <div className="flex gap-3">
                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 w-28 px-1 py-1 text-xs lg:text-xl lg:w-40 lg:h-12 font-semibold rounded-sm text-opacity-90 hover:text-opacity-100">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption md:block absolute top-10 lg:top-40 space-y-3 w-4/5 lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold capitalize">
                  Eiffel Tower
                </h5>
                <p className="text-xs lg:text-lg">
                  The Eiffel Tower is a wrought-iron lattice tower on the Champ
                  de Mars in Paris, France.
                </p>
                <div className="flex gap-3">
                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 w-28 px-1 py-1 text-xs lg:text-xl lg:w-40 lg:h-12 font-semibold rounded-sm text-opacity-90 hover:text-opacity-100">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://www.planetware.com/wpimages/2021/04/africa-best-places-to-visit-great-pyramids-cairo-egypt.jpg"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption md:block absolute top-5 lg:top-40 space-y-3 w-4/5 lg:w-3/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  Witness the Pyramids of Giza
                </h5>
                <p className="text-xs lg:text-lg w-3/5">
                  Watching the sun rise or set over the Pyramids of Giza in
                  Egypt from the back of a camel is an experience you'll never
                  forget.
                </p>
                <div className="flex gap-3">
                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 w-28 px-1 py-1 text-xs lg:text-xl lg:w-40 lg:h-12 font-semibold rounded-sm text-opacity-90 hover:text-opacity-100">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=839&q=80"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption md:block absolute top-10 lg:top-40 space-y-3 w-4/5 lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">Phuket</h5>
                <p className="text-xs lg:text-lg">
                  Thailand's biggest island is also a magnet for visitors–and
                  for good reason. Phuket boasts some of the best beaches in the
                  country, with clean, soft, rolling sands and turquoise waters
                  as far as the eye can see.
                </p>
                <div className="flex gap-3">
                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 w-28 px-1 py-1 text-xs lg:text-xl lg:w-40 lg:h-12 font-semibold rounded-sm text-opacity-90 hover:text-opacity-100">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://www.holidify.com/images/compressed/dest_wiki_16716.jpg"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption md:block absolute top-4 lg:top-40 space-y-3 w-4/5 lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">Venice</h5>
                <p className="text-xs lg:text-lg">
                  A city located in north east Italy and the capital of the
                  Veneto region. It is known for its beautiful settings, artwork
                  and a predominantly Venetian Gothic architecture. A beautiful
                  city known for its interconnected canals and its gondola
                  rides.
                </p>
                <div className="flex gap-3">
                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 w-28 px-1 py-1 text-xs lg:text-xl lg:w-40 lg:h-12 font-semibold rounded-sm text-opacity-90 hover:text-opacity-100">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://www.holidify.com/images/bgImages/SANTORINI.jpg"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption md:block absolute top-8 lg:top-40 space-y-3 w-4/5 lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  Oia, Santorini
                </h5>
                <p className="text-xs lg:text-lg">
                  Santorini is a volcano island just 200 km away from mainland
                  Greece. The place was formed after a large volcanic eruption
                  that created a caldera.
                </p>
                <div className="flex gap-3">
                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 w-28 px-1 py-1 text-xs lg:text-xl lg:w-40 lg:h-12 font-semibold rounded-sm text-opacity-90 hover:text-opacity-100">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import gallery from "../data/photogallery.json";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default function PhotoGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const imagesElement = gallery.map((image) => (
    <SwiperSlide key={image.id}>
      <img
        src={image.img}
        alt={image.alt}
        className="w-full h-full object-cover rounded-lg cursor-pointer"
      ></img>
    </SwiperSlide>
  ));

  return (
    <div id="gallery" className=" max-w-4xl mx-auto text-center py-16 px-8">
      <h1 className="font-cinzel text-white text-3xl md:text-4xl mb-12 md:mt-6">
        PHOTO GALLERY
      </h1>
      <div className="md:border-[12px] border-[8px] border-[#d4c2a5] rounded-md shadow-[0_0_20px_rgba(0,0,0,0.3)] bg-[#f9f4e7] p-2 md:p-4 mb-12 relative">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".gallery-button-prev";
            swiper.params.navigation.nextEl = ".gallery-button-next";
          }}
          navigation={{
            nextEl: ".gallery-button-next",
            prevEl: ".gallery-button-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="rounded-xl shadow-lg h-64 md:h-96 relative border-4 border-[#a18b6f] p-2 bg-[#f5eedc]"
        >
          {imagesElement}
        </Swiper>
        <div className="gallery-button-prev absolute top-1/2 left-[-8px] -translate-y-1/2 z-10 cursor-pointer p-2  bg-white/70 hover:bg-white/90 transition-all rounded-full shadow-lg">
          <FaChevronLeft className="text-[#1A1A1A] text-lg md:text-2xl" />
        </div>

        <div className="gallery-button-next absolute top-1/2 right-[-8px] -translate-y-1/2 z-10 cursor-pointer p-2 bg-white/70 hover:bg-white/90 transition-all rounded-full shadow-lg">
          <FaChevronRight className="text-[#1A1A1A] text-lg md:text-2xl" />
        </div>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        loop={true}
        spaceBetween={12}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="mt-4 px-10"
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.img}
              alt={image.alt}
              className={`w-48 h-16 md:h-20 object-cover hover:scale-105 cursor-pointer rounded-lg transition-all duration-300 ${
                activeIndex === index
                  ? "filter-none scale-105"
                  : "blur-xs opacity-45"
              }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TestimonialsItem from "./TestimonialsItem";

const TestimonialsData = [
  {
    id: 1,
    img: "/person/1.jpg",
    name: "Angelie Jul",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/person/2.jpg",
    name: "Peper Pods",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "/person/3.jpg",
    name: "Bruce Wayne",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "300",
  },
  {
    id: 4,
    img: "/person/4.jpg",
    name: "Latte",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "400",
  },
  {
    id: 5,
    img: "/person/5.jpg",
    name: "Angel Wick",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "500",
  },
  {
    id: 6,
    img: "/person/6.jpg",
    name: "Arya Stark",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "600",
  },
  {
    id: 7,
    img: "/person/7.jpg",
    name: "Bruce Banner",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "700",
  },
];
const Testimonials = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-second2 font-bold">
            Testimonials
          </h1>

          <div className="flex justify-center m-4">
            <div
              className="mb-6 h-1 w-full max-w-xl
                     bg-gradient-to-r opacity-50
                      from-primary to-secondary"
            ></div>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {TestimonialsData.map((testimon) => (
            <SwiperSlide key={testimon.id}>
              <TestimonialsItem
                aosDelay={testimon.aosDelay}
                description={testimon.description}
                img={testimon.img}
                name={testimon.name}
              ></TestimonialsItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

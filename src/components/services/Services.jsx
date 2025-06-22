import React from "react";
import ServicesItem from "./ServicesItem";

const ServiceData = [
  {
    id: 1,
    img: "/1.png",
    name: "Espresso",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/3.png",
    name: "Cappicuno",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/4.png",
    name: "Americano",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "500",
  },
  {
    id: 4,
    img: "/5.png",
    name: "Latte",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tenetur ducimus dolor nulla natus obcaecati",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <div className="py-10">
      <div className="container m-auto mb-20">
        <div className='text-center'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl" >Best Coffe For you</h1>
            <div className="flex justify-center m-4">
                <div className="mb-6 h-1 w-full max-w-xl bg-gradient-to-r opacity-50 from-primary to-secondary"></div>
            </div>
        </div>

        <div className="mt-20 w-full grid xl:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-10 place-items-center">
            {
                ServiceData.map((data,i)=>(
                    <ServicesItem key={i} data={data} />
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Services;

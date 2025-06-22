import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import HeroItem from './HeroItem';


const heroItems = [
        {
          label1: 'City s top',
          label2: 'coffee',
          label3: 'coding with caffeine and code.',
          src: '/1.png',
          text1: 'Hey Coder',
          text2: 'Hey Coffee',
        },
        {
          label1: 'Citys best brew',
          label2: 'coding ',
          label3: 'with caffeine and code.',
          src: '/3.png',
          text1: 'Hey Coder',
          text2: 'Hey Coffee',
        },
        {
          label1: 'Finest brew',
          label2: 'fueling  ',
          label3: 'code with caffeine.',
          src: '/4.png',
          text1: 'Hey Coder',
          text2: 'Hey Coffee',
        },
        {
          label1: 'Boldest brew',
          label2: 'fueling  ',
          label3: 'code with caffeine.',
          src: '/5.png',
          text1: 'Hey Coder',
          text2: 'Hey Coffee',
        },
      ];


const Hero = () => {
  return (
    <div className='min-h-[550px] md:min-h-[600px] bg-brandDark flex items-center justify-center text-light'>
      <div className="container">

        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            heroItems.map((hero,i)=>
            <SwiperSlide  >
                <HeroItem hero={hero} key={i} />
            </SwiperSlide>  
            )
        }
       
       
      </Swiper>

      </div>
    </div>
  )
}

export default Hero

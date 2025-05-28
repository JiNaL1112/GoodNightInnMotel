import React from 'react';
// import swiper react components
import {Swiper , SwiperSlide} from 'swiper/react';
// import swiper styles
import 'swiper/css' ;
import 'swiper/css/effect-fade';

//import required modules
import { EffectFade , Autoplay} from 'swiper';
// images
import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';

const slides = [
  {
    title: 'Youre Luxury Hotel For Vaction',
    bg: Img1,
    btnText: 'Room & Suites',
  },
  {
    title: 'Youre Luxury Hotel For Vaction',
    bg: Img2,
    btnText: 'Room & Suites',
  },
  {
    title: 'Youre Luxury Hotel For Vaction',
    bg: Img3,
    btnText: 'Room & Suites',
  }
]

const HeroSlider = () => {
  return (
    <Swiper className='heroSlider h-[600px] lg:h-[860px]'>
      {slides.map((slide,index)=> {
        //destructure slide
        const { title , bg , btnText} = slide;
        return <SwiperSlide className='h-full bg-pink-300' key={index}>
          <div>
            <div>Just Enjoy and relax</div>
          </div>
          <div className='absolute top-0 w-full h-full'>
            <img 
              className='object-cover h-full w-full' 
              src={slide.bg} 
              alt=''
            />
          </div>
          { /*overlay*/}
          
        </SwiperSlide>
      })}
    </Swiper>
  );
};

export default HeroSlider;

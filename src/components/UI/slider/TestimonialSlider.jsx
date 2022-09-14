import React from 'react';
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg"
import ava02 from "../../../assets/images/ava-2.jpg"
import ava03 from "../../../assets/images/ava-3.jpg"

import "../../../styles/slider.css";

const TestimonialSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoPlaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow:1,
        slidesToScroll:1
    }
  return <Slider {...settings}>
        <div>
            <div>
            <p className='review__text'>
            "Ben böyle lezzet görmedim Harika, Pörfektt. Bu nasıl bir şey böyle ya gerçekten
            delirdim bayıldım avuç içlerim terledi. Burada yemek yemekten başka bir şey
            düşünemez oldum."
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                 <img src={ava01} alt="avatar" className='rounded' />
                <h6>Pelinsu Gündüz </h6>
            </div>
            </div>
          </div>

          <div>
             <div>
            <p className='review__text'>
            "sevmek ne kelime ba - yıl - dım ! Buradan ilk defa sipariş verdim ve bayıldım
            porsiyonlar büyük ve çok lezzetli inanılmaz bir yer burası. tüm paramı burada
            harcamak istiyorum"
            </p>
                <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava02} alt="avatar" className=' rounded' />
                <h6>Amelie Marsh</h6>
                </div>
            </div>
          </div>

          <div>

          <div>
            <p className='review__text'>
                "Buradan söylemeye başladığımdan beri kilo verdim çünkü iştahım kaçtı teşekkürler.
                Varya ben bugüne kadar yemek yemiyormuşum, hayatta kalıyormuşum resmen abi çok iyi 
                yaaaaaaaaa"
            </p>
            <div className=' slider__content d-flex align-items-center gap-3'>
                <img src={ava03} alt="avatar" className=' rounded' />
                <h6>Mitchell Marsh</h6>
            </div>
            </div>
          </div>

  </Slider>
}

export default TestimonialSlider
import React from 'react'
import '../assets/ImageSlider.scss'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide}  from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState } from 'react'


export const Slider = props => {
  const [activeThumb, setActiveThumb] = useState()

  return <>
    <Swiper
      loop={true}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation, Thumbs]}
      grabCursor={true}
      thumbs={{ swiper: activeThumb }}
      className='image-slider'
    >
      {
        props.images.map((item, index) => (
          <SwiperSlide key={ index }>
            <img src={ item } alt="Slider Images" />
          </SwiperSlide>
        ))
      }
    </Swiper>
    <Swiper
      onSwiper={setActiveThumb}
      loop={true}
      spaceBetween={10}
      slidesPerView={4}
      modules={[Navigation, Thumbs]}
      className='image-slider-thumbs'
    >
      {
        props.images.map((item, index) => (
          <SwiperSlide key={ index }>
            <div className='image-slider-thumbs-wrapper'>
              <img src={ item } alt="Slider Images" />
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  </>
    
}

Slider.propTypes = {
  images: PropTypes.array.isRequired
}
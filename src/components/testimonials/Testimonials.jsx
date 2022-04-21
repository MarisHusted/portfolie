import React from 'react'
import './testimonials.css'
import animation from '../../assets/woods.jpg'
import portrait from '../../assets/hopsin.jpg'
import photo from '../../assets/procreate-girl.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: portrait,
    name: 'Portaits in procreate',
    rewiew: 'Stylized or cartoon portraits available on print A4, postcard and A2'

  },
  {
    avatar: photo,
    name: 'Commision from photo',
    rewiew: 'realictic portait drawing of one or more people. Also available on print A4, postcard and A2'
  },
  {
    avatar: animation,
    name: 'small animation',
    rewiew: 'small animation for your website '
  },

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Commision</h5>
      <h2>Comomision pricing</h2>

      <Swiper className='container testimonials_container'
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, rewiew }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} alt="client" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{rewiew}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
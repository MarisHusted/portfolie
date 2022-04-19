import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVATAR1,
    name: 'Tina Snow',
    rewiew: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat distinctio, sed dolorem debitis quasi assumenda odio veniam, laborum cum dolorum minima saepe laboriosam, odit sapiente labore soluta? Aperiam, error reiciendis?'

  },
  {
    avatar: AVATAR2,
    name: 'Shatta Wale',
    rewiew: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat distinctio, sed dolorem debitis quasi assumenda odio veniam, laborum cum dolorum minima saepe laboriosam, odit sapiente labore soluta? Aperiam, error reiciendis?'
  },
  {
    avatar: AVATAR3,
    name: 'Kwame Despite',
    rewiew: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat distinctio, sed dolorem debitis quasi assumenda odio veniam, laborum cum dolorum minima saepe laboriosam, odit sapiente labore soluta? Aperiam, error reiciendis?'
  },

  {
    avatar: AVATAR4,
    name: 'Nana Ama McBrown',
    rewiew: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat distinctio, sed dolorem debitis quasi assumenda odio veniam, laborum cum dolorum minima saepe laboriosam, odit sapiente labore soluta? Aperiam, error reiciendis?'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

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
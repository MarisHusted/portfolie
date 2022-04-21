import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>I can help you with</h5>
            <h2>Services</h2>

            <div className='container services_container'>
                <article className='service'>
                    <div className='service_head'>
                        <h3>Amimation or illustration Commision</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Portraits in procreate</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>small animations in procreate</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Commision from photo</p>
                        </li>
                  
                



                    </ul>
                </article>

                <article className='service'>
                    <div className='service_head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>building website</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Wordpress website</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Designing website</p>
                        </li>
                        
                    </ul>
                </article>

                <article className='service'>
                    <div className='service_head'>
                        <h3>Logo Design</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Design of your logo</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Bussines card deisign and print</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Choose between a couple logo of logo</p>
                        </li>
                        
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
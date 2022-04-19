import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_0u0wpx6', 'template_gx0w1wb', form.current, 'VQEwUPrRLXAh8ns2o')
          
          e.target.reset()
        };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>


            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                     <MdOutlineEmail className='contact_option-icon'/>
                     <h4>Email</h4>
                     <h5>mariahusted4@gmail.com</h5>
                     <a href="mailto:mariahusted4@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className='contact_option'>
                     <RiMessengerLine className='contact_option-icon'/>
                     <h4>Messenger</h4>
                     <h5>mariahusted4@gmail.com</h5>
                     <a href="https://m.me/maria.hustedpedersen" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact_option'>
                     <BsWhatsapp className='contact_option-icon'/>
                     <h4>Phone</h4>
                     <h5>+4550422493</h5>
                     <a href="https://m.me/maria.hustedPedersen">Call or leave message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required/>
                <input type="email" name='email' placeholder='Your Email' required/>
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send a Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
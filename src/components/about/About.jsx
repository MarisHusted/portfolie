import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                    <img src={ME} alt="About"/>
                    </div>
                </div>

                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Coding Experience</h5>
                            <small>2 Years Coding Experience</small>
                        </article>
                        <article className='about_card'>
                            <HiCode className='about_icon' />
                            <h5>software knowledge</h5>
                            <small>html css js & react</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects portfolio</h5>
                            <small>10</small>
                        </article>
                    </div>
                    <p>
                        I am a frontend developer passionate about about design and things like ux design. I like to make websites look nice and add a personal touch. I have 2 years og frontend coding efperience. In my free time i love to draw on my Ipad, i use mostly procreate for doing art and animations and Illustrator designing and logos. I have basic knowledge and experience in the Adobe software.  
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;
import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills i have</h5>
            <h2>My Experience</h2>
            <div className='container experience_container'>
                <div className='experience_frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>Wordpress</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience_backend'>
                    <h3>Adobe Expereince</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>Photoshop</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>Illustrator</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>XD</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>Lightroom</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                                <h4>Indesign</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience
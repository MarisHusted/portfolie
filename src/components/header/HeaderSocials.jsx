import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'


const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://linkedin.com" target='_blank'><BsFacebook/></a>
            <a href="https://github.com" target='_blank'><FaGithub/></a>
            <a href="https://instagram.com" target='_blank'><AiFillInstagram/></a>
        </div>
    )
}



export default HeaderSocials 
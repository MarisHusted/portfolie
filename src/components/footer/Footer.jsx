import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
    return (
        <footer>
        <a href="#" className='footer_logo'>MH</a>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">pricing</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
          <a href="https://facebook.com"><FaFacebook/></a>
          <a href="https://instagram.com"><FiInstagram/></a>
          <a href="https://github.com"><FaGithub/></a>
        </div>

        <div className='footer_copyright'>
            <small>&copy; All rights reserved.</small>
        </div>
        </footer>
    )
}

export default Footer
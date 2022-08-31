import React from 'react'
import './gallery.css'
import Alita from '../../assets/Alita.png'
import woods from '../../assets/woods.jpg'
import girl from '../../assets/procreate-girl.jpg'
import yokai from '../../assets/yokai.png'
import cartoomMe from '../../assets/cartoonme.jpg'
import hopsin from '../../assets/hopsin.jpg'


const Gallery = () => {

return (


    <div id="gallery" className='gallery'>
        <article className='galleryItem'>
            <h5>illustration</h5>
            <img src={Alita} alt="" className='galleryImg' />
        </article>
        <article className='galleryItem'>
            <h5>illustration</h5>
            <img src={woods} alt="" className='galleryImg' />
        </article>
        <article className='galleryItem'>
            <h5>illustration</h5>
            <img src={girl} alt='' className='galleryImg'></img>
        </article>
        <article className='galleryItem'>
            <h5>illustration</h5>
            <img src={yokai} alt='' className='galleryItem'></img>
        </article>
        <article className='galleryItem'>
            <h5>illustration</h5>
            <img src={cartoomMe} alt='' className='galleryItem'></img>
        </article>
        <article className='galleryItem'>
            <h5>illustraion</h5>
            <img src={hopsin} alt='' className='galleryItem'></img>
        </article>
    </div>

)}

export default Gallery
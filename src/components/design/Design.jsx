import React from 'react'
import './design.css'
import girl from '../../assets/procreate-girl.jpg'
import woods from '../../assets/woods.jpg'
import JayvB from '../../assets/JayvB.jpg'


const Design = () => {

return (
    
    <div id="design" className='gallery'>
        <article className='galleryItem'>
            <h5>logo</h5>
            <img src={JayvB} alt="" className='galleryImg' />
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
            <h5>Fugetech</h5>
        </article>
        <article className='galleryItem'>
            <h5>Ecosteam</h5>
        </article>
        <article className='galleryItem'>
            <h5>yoga</h5>
        </article>
    </div>

)}

export default Design


/*get help with illistrator and get exebition banner*/
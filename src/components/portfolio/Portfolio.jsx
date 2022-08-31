/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './portfolio.css'
import IMG5 from '../../assets/Homeyoga.JPG'





const data = [
    {
        id: 1,
        image: IMG5,
        title: 'Yoga',
        github: 'https://github.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Makeup side',
        github: 'https://github.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'fremtidsside',
        github: 'https://github.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'jay vb',
        github: 'https://github.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Andrea Side',
        github: 'https://github.com'
    },
    {
        id1: 5,
        image: IMG5,
        title: 'Rollespil',
        github: 'https://github.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Astar',
        github: 'https://github.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'One Day Viborg',
        github: 'https://github.com'
    }
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My recent Work</h5>
            
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    data.map(({id, image, title, github }) => {
              return (
                <article key={id} className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className='portfolio_item-cta'>
                        <a href={github} rel='noreferrer' className='btn' target='_blank'>Github</a>
                        <a href='#' className='btn btn-primary' target='_blank'>PDF</a>
                    </div>

                </article>
                )
                    })
              }
            </div>
        </section>
    )
}

export default Portfolio


/*work on projekts
-rollespil 
-make adjustment on the rest makeup, fremtids, Andrea & musikside
*/

/*make thumbnails and pdf's when finished*/

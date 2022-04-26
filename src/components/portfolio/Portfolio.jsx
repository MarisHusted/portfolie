import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/JayvB.jpg'
import IMG2 from '../../assets/Bilhus.JPG'
import IMG3 from '../../assets/Ecosteam.jpeg'
import IMG4 from '../../assets/Fugetech.jpeg'
import IMG5 from '../../assets/Homeyoga.JPG'
import IMG6 from '../../assets/Jay-Vb.jpg'
import IMG7 from '../../assets/TravelSpace.png'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Jay vB',
        github: 'https://github.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'VM BILHUS',
        github: 'https://github.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'ECO STEAM',
        github: 'https://github.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Sima Fugetech',
        github: 'https://github.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Home Yoga',
        github: 'https://github.com'
    },
    {
        id1: 6,
        image: IMG6,
        title: 'Jay vB',
        github: 'https://github.com'
    },
    {
        id: 7,
        image: IMG7,
        title: 'Travel Space',
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
                        <a href={github} className='btn' target='_blank'>Github</a>
                        <a href='#' className='btn btn-primary' target='_blank'>Logo</a>
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


/*tilføj:
design/web section (tilføj one day viborg)
animation(både web og procreate) tegninger sektion*/

/*lave og tilføje illustrationer i designet*/

/*ret tekster og layout*/ 


/*projects
portfolio
Astar 
*/
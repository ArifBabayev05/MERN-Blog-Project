import React from 'react'
import "./Hero.css"
import BookImage from '../../Images/book.png'
const Hero = () => {
    return (
        <div className='section mt-4 container'>
            <div className='row d-flex'>
                <div className='col-lg-6 col-sm-12 '>
                    <div className='ImageSection'>
                        <img src={BookImage} alt="someImage"/>
                    </div>
                </div>

                <div className='col-lg-6 col-sm-12'>
                <div className='TextSection'>
                        <h1 className="text">İnkişaf <br/> Zamanıdır!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
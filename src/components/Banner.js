import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaPlay } from "react-icons/fa"


const Banner = () => {
  return <header className="header">
          <div className="container">
            <div className='row'>
              <div className='col-6'>
                <div className='header__content'>
                <div className='header__section'>
                <ul className="heder__ul">
                    <li><FaFacebookF/></li>
                    <li><FaTwitter/></li>
                    <li><FaInstagram/></li>
                    <li><FaLinkedinIn/></li>
                    <li><FaGithub/></li>

                </ul>
                <h1>I am Yeasir Arafat</h1>
                <p>Coding is my path to success! I am a web developer specializing in MERN stack. Let's create something awesome together!</p>
                <div className='header__btn'>
                  <a href='' className='btn btn-outline'> My Protfolio</a>
                  &nbsp;&nbsp;&nbsp;
                  <a href='' className='btn btn-smart'><FaPlay className='play'/> </a>

                </div>

                </div>
                </div>

              </div>
              <div className='col-6'>
                <div className='banner__img'>
                  <img src="/images/developer.png" alt="" />
                </div>

              </div>
            </div>
          </div>
        

    </header>
  
}
 export default Banner;
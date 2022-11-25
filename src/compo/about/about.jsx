import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { HiSpeakerphone } from 'react-icons/hi'
import { FiUsers } from 'react-icons/fi'
import {FaUserSecret} from 'react-icons/fa'
import { urlFor, client } from '../../client'


import { VscFolderLibrary } from 'react-icons/vsc'
import './about.sass'

const About = () => {


  // console.log(aboutdata)

  return (
    <>
      <div className="about" id='about'>
        <p></p>
        <h2 className='cen'>About</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-img">
              <img src={"/me1.png"} alt="up coming" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <HiSpeakerphone className='about__icon' />
                <h5>Course Language</h5>
                <small>{"Tamil"}</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className='about__icon' />
                <h5>Course Duration</h5>
                <small>{"120+ Hours"}</small>
              </article>
              <article className="about__card hid_m">
                <FiUsers className='about__icon' />
                <h5>Course Training </h5>
                <small>{"Online"}</small>
              </article>

              <article className="about__card hid_m">
                <FaUserSecret className='about__icon' />
                <h5>Course Category</h5>
                <small>{"Offensive & Defensive"}</small>
              </article>
            </div>


            <Link to="/p/aboutme">
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
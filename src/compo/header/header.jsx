import React from 'react';
import { useState , useEffect} from 'react';
import './header.css';
import { urlFor, client }  from '../../client'

import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsInstagram , BsFillArrowUpRightSquareFill} from 'react-icons/bs'
import {Link} from "react-router-dom" 

import logo from "../../assets/logo1.png"


const Header = () => {
  const Links_wat = "https://api.whatsapp.com/send?phone=%2B919361387478"
  const Link_insta = "https://www.instagram.com/darkhatlearning/"
  const Link_web = "https://darkhat.in/"


  return (
    <div className='container header__main '>

    <div className="flaexheadder">
    <div className="header__logo">
        <img src={logo} alt="" />
      </div>

    <div className='headder_text' >
      <h1 className="headder__maintextt">
        Certified Ethical Hacker
      <br />
        Training    
      </h1>
    
    </div>

      <p className='mar0 ptop'> &zwnj;  </p>
      {/* wrapper */}
      {/* <div className="">
      typing-demo
        <h1 className='mar0 '>&zwnj; </h1>
      </div> */}
      <p className='mar0 ptop1'>&zwnj;  </p>

        <a href="#contacts">
            <button type="button" className="btn btn-primary btn2 mybtn3" >Contact us</button>
        </a>

    </div>
      <div className="sa">
        <a href={Links_wat}><AiOutlineWhatsApp  className='a__headder'/></a>
        <a href={Link_insta}><BsInstagram className='a__headder'/></a>
        <a href={Link_web}><BsFillArrowUpRightSquareFill className='a__headder'/></a>
      </div>
      <div>
        <a href="#about" className="scd">Scroll Down</a>
      </div>

    </div>
  )
}

export default Header
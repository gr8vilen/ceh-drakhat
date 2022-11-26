import React from 'react'
import './achievement.sass'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import Scrool from './scrool/scrool'
import Sylabus from './sylabus/sylabus'
import Test from './test/test'


const achievement = () => {


  return (
    <>
    <Sylabus></Sylabus>
    <Scrool></Scrool>
    <div style={ { display: "flex", justifyContent: "center" }
}>

  <a href="/DarkHatCEHv12.pdf" class="btn btn3 btn-primary mybtnd" style={{width: "300px" , color: "#fff"}} download> Download Brochure </a>      
    </div>

    <Test></Test>

    </>
  )
}

export default achievement
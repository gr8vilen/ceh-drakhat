import React from 'react'
import './sylabus.scss'
import { Carousel } from 'react-responsive-carousel';


function Sylabus() {



  return (
    <>
      <header id='Syllabus'>
        <h1>Course Syllabus</h1>
        <p></p>
      </header>

      {/* honey come */}
      <ul class="honeycomb" lang="es">
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src="https://cdn.nextgov.com/media/img/cd/2018/04/04/040418bugbountyNG/860x394.jpg" />
          <div class="honeycomb-cell__title">Bug Bounty</div>
        </li>
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80" />
          <div class="honeycomb-cell__title">Networking</div>
        </li>
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src="https://media.istockphoto.com/id/639721194/photo/smartphone-in-hand-and-showing-cyber-security-concept-on-screen.jpg?b=1&s=170667a&w=0&k=20&c=MM7HrHl_LvEB5lMt7fi_cCjQrtGJaVovqjcMcI0w7FY=" />
          <div class="honeycomb-cell__title">Android Hacking</div>
        </li>
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src="https://wallpaperaccess.com/full/896810.jpg" />
          <div class="honeycomb-cell__title">Windows Hacking</div>
        </li>
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src="https://miro.medium.com/max/1200/1*VPJjiv8LhVtvkh9A75ov2w.jpeg" />
          <div class="honeycomb-cell__title">Wifi Hacking</div>
        </li>
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src="https://www.kali.org/blog/kali-linux-2021-2-release/images/banner-2021.2-release.jpg" />
          <div class="honeycomb-cell__title">Linux Hacking</div>
        </li>
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src="https://www.onboardonline.com/assets/Stock-images/Social-media-hack-1200x630.jpg" />
          <div class="honeycomb-cell__title">Social Media <small>Hacking</small></div>
        </li>
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src="https://www.soscanhelp.com/hubfs/Globe%20Made%20of%20Data%20Header.png" />
          <div class="honeycomb-cell__title">Darkweb</div>
        </li>
        <li class="honeycomb-cell">
          <img class="honeycomb-cell__image" src="https://miro.medium.com/max/480/1*ENYsdeniccwZ_593kUOjeg.jpeg" />
          <div class="honeycomb-cell__title">Python</div>
        </li>
        <li class="honeycomb-cell honeycomb__placeholder"></li>
      </ul>




    </>
  )
}

export default Sylabus
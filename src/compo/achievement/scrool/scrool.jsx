import React from 'react'
import './scrool.scss'


function Scrool() {


const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['Job_Placement_Guide', 'Premium_Membership ', '200+_Attacks_Include ', 'Hacking_Tools(Orginal)', 'Life_Time_Access', 'High_Quality_Videos', 'Fully_Pratical_Based_Videos', 'Call_Support', 'Chat_Support', 'Certificate'];
const DURATION = 25000;
const ROWS = 4;
const TAGS_PER_ROW = 10;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({text, color}) => (
  <div className='tag' style={{ '--color': color}}><span>#</span> {text}</div>
);






  return (
    <div id='Features'>

<div className='exapp'>
    <header>
      <h1>Course Features</h1>
      <p></p>
    </header>
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='exfade'/>
    </div>
  </div>




    </div>
  )
}

export default Scrool
import React from 'react';
import './intro.css';
import hireImg from '../../assets/hireme.png';
import bg from '../../assets/image.png';



const Intro = () => {
  return (
    <section id="intro">
      <div className="left-intro">
        <span className="hello">Hello ,</span>
        <span className='introName'>I'm <span className='introNameColor'>AmirMohammad</span><br />Website Designer</span>
        <p className='introParagraph'>As a hard-working newbie in the field of web development ,<br />
         I possess a strong foundation in HTML, CSS, and JavaScript , Now I'm on track to develop my skills in React</p>
        <a href='https://www.linkedin.com/in/amikhodabande' target='_blank'><button className="introHireMe"><img src={hireImg} alt="hire" className="introBtnImg" />Hire Me</button></a>
      </div>
      <img src={bg} alt="bachground" className="bg" />
    </section>
  )
}

export default Intro;
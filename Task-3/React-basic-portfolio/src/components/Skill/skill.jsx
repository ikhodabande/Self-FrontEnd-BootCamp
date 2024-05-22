import React from 'react';
import './skill.css';
import uiImg from '../../assets/ui-design.png';
import webImg from '../../assets/website-design.png';
import appImg from '../../assets/app-design.png';


function Skill() {
  return (
    <section id="skill">
        <span className="headerSkillTitle">What I Do</span>
        <span className="headerSkillParagraph">As a web designer, I'm passionate about creating visually stunning and user-friendly websites. I believe that
          design plays a crucial role in making a strong online presence, and my goal is to craft websites that not only
          look beautiful but also provide a seamless user experience.</span>  
      <div className="skillBars">
        <div className="skillBar">
          <img src={uiImg} alt="" className="skillBarImg" />
          <div className="skillBarDes">
            <h1>Front-end Developer</h1>
            <p>I specialize in creating web applications with React and front-end development technologies. My goal is to build
          responsive, user-friendly, and visually appealing websites.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webImg} alt="" className="skillBarImg" />
          <div className="skillBarDes">
            <h1>Web Designer</h1>
            <p>As a web designer, I focus on creating visually appealing and user-friendly websites that make a great first impression.
          I pay attention to every detail to ensure that the design reflects the uniqueness of each project.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={appImg} alt="" className="skillBarImg" />
          <div className="skillBarDes">
            <h1>UI/UX Designer</h1>
            <p>As a UI/UX designer, I specialize in creating user-friendly interfaces and delightful user experiences. My design
          approach focuses on both aesthetics and usability, ensuring that every project is visually appealing and easy to
          navigate.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill;

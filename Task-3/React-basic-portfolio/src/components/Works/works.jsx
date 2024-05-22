import React from 'react';
import './works.css';
import img1 from '../../assets/portfolio-1.png';
import img2 from '../../assets/portfolio-2.png';
import img3 from '../../assets/portfolio-3.png';
import img4 from '../../assets/portfolio-4.png';
import img5 from '../../assets/portfolio-5.png';
import img6 from '../../assets/portfolio-6.png';

function Works() {
  return (
    <section id="works">
      <h1 className="header">My Works</h1>
      <span className="des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, voluptate consectetur. Fugit doloremque hic nihil nemo at quidem, omnis labore!</span>
      <div className="worksImgs">
        <a href=""><img src={img1} alt="" className='worksImg' /></a>
        <a href=""><img src={img2} alt="" className='worksImg' /></a>
        <a href=""><img src={img3} alt="" className='worksImg' /></a>
        <a href=""><img src={img4} alt="" className='worksImg' /></a>
        <a href=""><img src={img5} alt="" className='worksImg' /></a>
        <a href=""><img src={img6} alt="" className='worksImg' /></a>
      </div>
      <button className="workBtn">See More</button>
    </section>
  )
}

export default Works;
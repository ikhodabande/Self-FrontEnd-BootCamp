import React from 'react'
import './contact.css'
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubekIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';



const Contact = () => {
  return (
   <section id="contactPage">
     <div className="clients">
      <h1 className="contactPageTitle">My Client</h1>
      <p className="clientDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolores magnam eaque molestiae dignissimos saepe atque quisquam commodi adipisci minima.
      </p>
      <div className="clientImgs">
        <img src={walmart} alt="" className="clientImg" />
        <img src={adobe} alt="" className="clientImg" />
        <img src={microsoft} alt="" className="clientImg" />
        <img src={facebook} alt="" className="clientImg" />
      </div>
     </div>
     <div id='contact' className="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
      <form  className='contactForm' >
        <input type="text" className='name' placeholder='Your Name' />
        <input type="text" className='email' placeholder='Your Email' />
        <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
        <button type='submit' value='send' className="submitBtn">Submit</button>
        <div className="links">
          <img src={facebookIcon} alt="" className="link" />
          <img src={twitterIcon} alt="" className="link" />
          <img src={youtubekIcon} alt="" className="link" />
          <img src={instagramIcon} alt="" className="link" />
        </div>
      </form>

     </div>
   </section>
  )
}

export default Contact
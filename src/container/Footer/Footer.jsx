import React, {useState} from 'react'


import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'

import './Footer.scss'


const Footer = () => {

  const [formData, setformData] = useState({name:'', email:'', mobile:''});
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setloading] = useState(false);

  const {name ,email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setformData({...formData, [name]: value});

  }

  const handleSubmit = () => {
    setloading(true);
    
    const contact= {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    
  }

  return (
    <>
      <h2 className="head-text">Chat with Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:boby2965@gmail.com" className='p-text'>boby2965@gmail.com</a>
        </div>
        <div className="app__footer-card ">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 8939578986" className='p-text'>+91 8939 578986</a>
        </div>

        <div className='app__footer-form app__flex'>
            <div className='app__flex'>
              <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>

            </div>
            <div className='app__flex'>
              <input className='p-text' type="text" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
            </div>
            <div>
              <textarea 
                className='p-text'
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
                />
            </div>
            <button type="button" className='p-text' onClick={handleSubmit}>Send Message</button>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
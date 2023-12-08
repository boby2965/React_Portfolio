import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'
import './About.scss'

const abouts = [
  {title: 'Web Development', description: 'I am a good Web Developer with passion for building beautiful and functional web applications.', imgUrl:images.about01},
  {title: 'Front End Development', description: 'I am a good Front End Developer, who can build single page applications using React.', imgUrl:images.about02},
  {title: 'MERN Stack', description: 'I have good understanding of both front-End and Back-end of the applications in MERN stack.', imgUrl:images.about03},
  {title: 'Robot Development ', description: 'I am a good Robotics Engineer with good knowlege in designing and creating new robots.', imgUrl:images.about04}
];

const About = () => {
  return (
    <>
      <h2 className="head-text">I know that <span>Good Development</span><br/>means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5, type:'tween'}}
            className= "app__profile-item"
            key={about.title + index}
          >
           <img src={about.imgUrl} alt={about.title} />
           <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2> 
           <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
        
      </div>
    </>
  )
}

export default AppWrap( 
  MotionWrap(About, 'app__about'),
   'about',
   'app__whitebg'
)
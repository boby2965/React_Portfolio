import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'


import { images } from '../../constants'
import './Skills.scss'

const skills = [
  {name: 'React', bgColor:'#edf2f8', icon:images.react},
  {name: 'Node JS', bgColor:'#edf2f8', icon:images.node},
  {name: 'Java Script', bgColor:'#edf2f8', icon:images.javascript},
  {name: 'Git', bgColor:'#edf2f8', icon:images.git},
  {name: 'HTML', bgColor:'#edf2f8', icon:images.html},
  {name: 'SASS', bgColor:'#edf2f8', icon:images.sass}
];

const experiences = [
  {title: 'Web Development',codeLink:'', projectLink:'' ,description: 'I am a good Web Developer with passion for building beautiful and functional web applications.', imgUrl:images.about01, tags:['Web App']},
  {title: 'Cool Mobile App', codeLink:'', projectLink:'',description: 'I am a good Front End Developer, who can build single page applications using React.', imgUrl:images.about02, tags:['Web App']},
  {title: 'Gericht Restaurant Project',codeLink:'', projectLink:'', description: 'I have good understanding of both front-End and Back-end of the applications in MERN stack.', imgUrl:images.about03, tags:['Web App', 'Mobile App']},
  {title: 'Robot Development ', codeLink:'', projectLink:'',description: 'I am a good Robotics Engineer with good knowlege in designing and creating new robots.', imgUrl:images.about04, tags:['Mobile App']}
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text"> Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div
          className= "app__skills-list"  
        >
          {skills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0,1]}}
              transition= {{duration: 0.5}}
              className= "app__skills-item app__flex"
              key= {skill.name}
            >
              <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                <img src={skill.icon} alt="{skill.name}" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className= "app__skills-exp">
          {experiences.map((experience) => (
            <>
              <motion.div
              whileInView={{opacity: [0,1]}}
              transition= {{duration: 0.5}}
              className= "app__skills-exp-work app__flex"
              data-tip
              data-for= {experience.name}
              key= {experience.name}
              >
                <h4 className='bold-text'>
                  {experience.name}
                </h4>
                <p className='p-text'>{experience.company}</p>
              </motion.div>
              
            </>
          ))}
        </motion.div>
      </div>



    </>
  )
}

export default AppWrap( 
  MotionWrap(Skills, 'app__skills'),
   'skills',
   'app__whitebg'
)
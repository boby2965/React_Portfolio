import React, {useState} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import { motion } from 'framer-motion/dist/framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'

import { images } from '../../constants'
import './Work.scss'

const works = [
  {title: 'Web Development',codeLink:'', projectLink:'' ,description: 'I am a good Web Developer with passion for building beautiful and functional web applications.', imgUrl:images.about01, tags:['Web App']},
  {title: 'Cool Mobile App', codeLink:'', projectLink:'',description: 'I am a good Front End Developer, who can build single page applications using React.', imgUrl:images.about02, tags:['Web App']},
  {title: 'Gericht Restaurant Project',codeLink:'', projectLink:'', description: 'I have good understanding of both front-End and Back-end of the applications in MERN stack.', imgUrl:images.about03, tags:['Web App', 'Mobile App']},
  {title: 'Robot Development ', codeLink:'', projectLink:'',description: 'I am a good Robotics Engineer with good knowlege in designing and creating new robots.', imgUrl:images.about04, tags:['Mobile App']}
];

const Work = () => {
const [activeFilter, setActiveFilter] = useState('All')
const [animateCard, setAnimateCard] = useState({y:0, opacity:1})
const [works, setWorks] = useState([]);
const [filterWork, setFilterWork] = useState([])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity:0}])

    setTimeout(() => {
      setAnimateCard([{y:0, opacity:1}])
      if(item ==='All'){
        setFilterWork(works);
      }
      else{
        setFilterWork(works.filter((work)=> work.tags.includes(item)));
      }
    })
  }
  return (
    <>
      <h2 className="head-text">My creative <span>Portfolio</span> section</h2>
      <div className="app__work-filter">
        {['UI/UX','Web App', 'Mobile App', 'React JS', 'All'].map((item,index) => (
          <div 
            key={index}
            onClick={() => handleWorkFilter(item)}
            className = {`app__work-filter-item app__flex p-text ${activeFilter  === item ? 'item-active' : ' ' }`}
            >
              {item}
          </div>
        ))}
      </div>
      {works.map((work, index)=> (
        <motion.div
        animate = {animateCard}
        transition = {{duration: 0.5, delayChildren: 0.5}}
        className = "app__work-port"
      >
        <div className="app__work-item app__flex" key={index}>
          <div className="app__work-img app__flex" >
            <img src={work.imgUrl} alt={work.name} />
            <motion.div
              whileHover= {{opacity:[0,1]}}
              transition={{duration:0.25, ease: 'easeInOut', staggerChildren:0.5}}
              className="app__work-hover app__flex"
            >
              <a href={work.projectLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{scale:[0,1]}}
                  whileHover= {{scale:[1,0.9]}}
                  transition={{duration:0.25}}
                  className="app__flex"
                >
                  <AiFillEye/>
                </motion.div>
              </a>
              <a href={work.codeLink} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{scale:[0,1]}}
                  whileHover= {{scale:[1,0.9]}}
                  transition={{duration:0.25}}
                  className="app__flex"
                >
                  <AiFillGithub/>
                </motion.div>
              </a>
            </motion.div>
          </div>
          <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{marginTop: 10}}>{work.description}</p>
              <div className="app__work-tag app__flex" >
                <p className="p-text">{work.tags[0]}</p>
              </div>
          </div>
        </div>
      </motion.div>
      ))}
    </>
  )
}

export default AppWrap( 
  MotionWrap(Work, 'app__works'),
   'work',
   'app__primarybg'
)
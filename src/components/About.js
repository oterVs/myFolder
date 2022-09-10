import React from 'react'
import profile from '../sources/profile.jpg'
import waveee from '../sources/waveee.svg'
import './About.css'
import {motion} from 'framer-motion'
import Info from './Info'
export default function About() {
  return (
    <div className='mainAbout'>
      <motion.div animate={{x: 0}} initial={{x: -450}} transition={{type: "tween", duration: 2}} className='personalAbout'>
        <img className='personalImg' src={profile}></img>
      </motion.div>

      <div className='profesionalAbout'>
        <motion.div animate={{x: 0}} initial={{x: -650}} transition={{type: "tween", duration: 2}} className='nameTitle'>
           <h2 >Vicente David Saavedra Mueses</h2>
        </motion.div>
        <div className='nameSubtitle'>
          <Info className='personalInfo' />
          <motion.div animate={{x: 0}} initial={{x: -1050}} transition={{type: "tween", duration: 2}} className='aboutMe'>           
            <p>Estoy cursando los últimos semestres en la carrera de Ing. En Sistemas, y me gustaría poder poner en práctica todo lo que he aprendiendo. Principalmente he estudiado materias de programación en diferentes lenguajes, pero esta por demás decir que me puedo adaptar a las necesidades que se tengan</p>
          </motion.div>
         
        </div>
        
      </div>
      <img className='wave' src={waveee}/>
    </div>
  )
}

import React from 'react'
import Poke from './PokeApi/Poke'
import Todo from './toDo/Todo'
import Modal from './utils/Modal'
import { Divider } from '@material-ui/core'
import {motion} from 'framer-motion'
import List from './list/List'
import Emoji from './Emoji/Emoji'
import './Projects.css'
import LoginMain from './Login/LoginMain'
import Search from './Search/Search'
function Projects() {
  return (
    <div>
      <div className='header-projects'>
        <h2>Proyectos</h2>
        <Divider></Divider>
      </div>
      <div className='container-projects'>
        <Modal>
          <Poke></Poke>
        </Modal>
        <Modal>
          <Todo></Todo>
        </Modal>
        <Modal>
            <List></List>
        </Modal>
        <Modal>
            <Emoji></Emoji>
        </Modal>
        <Modal>
            <LoginMain></LoginMain>
        </Modal>
        <Modal>
            <Search></Search>
        </Modal>
      </div>
    </div>
  )
}

export default Projects